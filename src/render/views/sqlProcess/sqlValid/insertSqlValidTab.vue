<template>
  <n-scrollbar class="pr-2" style="height: calc(100vh - 158px);" trigger="hover">
    <n-alert type="default" :show-icon="false">
      选择对应数据库，校验此INSERT语句语法、逻辑是否正确<br>
      由于中台限制，来源表与目标表的数据库类型必须相同，即TBDS库只能至TBDS库，MYSQL库只能至MYSQL库
    </n-alert>
    <n-input
        class="mt-2"
        v-model:value="inputRef"
        type="textarea"
        placeholder="请输入INSERT语句"
        :clearable="true"
        @blur="trans"
    />
    <n-card class="mt-2" :content-style="{paddingTop:'8px',paddingBottom:'8px'}">
      <div>目标表：</div>
      <n-space justify="space-around">
        <n-select
            v-model:value="targetTableRef.dataSourceId"
            :default-value="6"
            :options="datasourceOptions"
            style="width: 200px"
            :size="'small'"
        />
        <n-input v-model:value="targetTableRef.tableName"
                 placeholder=""
                 readonly style="width: 200px"
                 :size="'small'"
        />
      </n-space>
      <n-divider/>
      <div>来源表：</div>
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <n-space justify="space-around" align="center">
            <n-select
                v-model:value="sourceTableDataSourceId"
                :options="datasourceOptions"
                style="width: 200px"
                :size="'small'"
            />
          </n-space>

        </n-gi>
        <n-gi>
          <n-space justify="space-around" style="padding-bottom: 6px" v-for="(table,index) in sourceTableArrRef"
                   :key="index"
          >
            <n-input :value="table" style="width: 200px"
                     placeholder=""
                     readonly
                     :size="'small'"
            />
          </n-space>
        </n-gi>
      </n-grid>

    </n-card>
    <n-space justify="center" class="mt-2">
      <n-button type="primary" class="w-28" @click="checkSql" :loading="isCheckRef">校验</n-button>
    </n-space>
    <n-input
        v-model:value="resRef"
        type="textarea"
        placeholder=""
        :autosize="{
        minRows: 3,
        maxRows: 7
      }"
        class="mt-2"
        readonly
    />
  </n-scrollbar>
</template>

<script setup lang="ts">
import {check_insert_sql} from "@render/api/datacenter";
import {datasourceOptions} from "@render/typings/datacenterOptions";
import {clone} from "lodash-es";
import {ref} from "vue";

const inputRef = ref('');
const resRef = ref('');

type DataSourceTable = {
  dataSourceId: string;
  tableName: string;
};

const targetTableRef = ref<DataSourceTable>({
  dataSourceId: '6',
  tableName: ''
});

const sourceTableDataSourceId = ref('6')
const sourceTableArrRef = ref<string[]>([])

const trans = () => {
  // 使用正则表达式寻找目标表名
  const regex = /INSERT\s+INTO\s+(\S+)/i;
  const tableNameMatches = regex.exec(inputRef.value);
  // 获取目标表名
  targetTableRef.value = {
    ...targetTableRef.value,
    tableName: tableNameMatches ? tableNameMatches[1] : ''
  };

  // 获取来源表名
  let sourceTableNames = extractSourceTableNames(inputRef.value);
  // 初始化
  sourceTableArrRef.value = []
  sourceTableNames.forEach(item => {
    sourceTableArrRef.value.push(item.trim())
  })
}

function extractSourceTableNames(sql: string): string[] {
  const regex = /(?<=FROM|JOIN)\s+\w+(?=\s+|\n|\r)?/gi;
  const matches = sql.match(regex);
  if (matches) {
    return [...new Set(matches)];
  } else {
    return [];
  }
}

let paramModel = {
  sparkConfig: {},
  sql: "",
  sourceDBId: [],
  sourceTable: [],
  targetDBId: '',
  targetTable: '',
  taskType: '',
  cmptType: 'MYSQL'
}

const isCheckRef = ref(false)

const checkSql = () => {
  isCheckRef.value = true
  paramModel.sql = inputRef.value.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ') // 扁平化
  paramModel.targetDBId = targetTableRef.value.dataSourceId
  paramModel.targetTable = targetTableRef.value.tableName
  paramModel.sourceDBId = Array(sourceTableArrRef.value.length).fill(sourceTableDataSourceId.value);
  paramModel.sourceTable = clone(sourceTableArrRef.value)

  const sourceDatasource = datasourceOptions.find(option => option.value === sourceTableDataSourceId.value).datasource as string;
  const targetDataSource = datasourceOptions.find(option => option.value === targetTableRef.value.dataSourceId).datasource as string;

  paramModel.taskType = `${sourceDatasource.toUpperCase()}2${targetDataSource.toUpperCase()}`

  check_insert_sql(paramModel).then((res) => {
    resRef.value = `${res.value}\n${res.msg || ''}`
    if (res.code === 3) {
      window.$message.success(res.value)
    } else {
      window.$message.error(res.value)
    }
    isCheckRef.value = false
  })
}
</script>

<style scoped>

</style>
