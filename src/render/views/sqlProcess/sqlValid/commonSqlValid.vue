<template>
  <n-scrollbar class="pr-2" style="height: calc(100vh - 158px); " trigger="hover">
    <n-alert type="default" :show-icon="false">
      校验SQL是否正确
    </n-alert>
    <n-card class="mt-2" :content-style="{paddingBottom:0}">
      <n-form ref="formRef"
              inline
              :size="'small'"
              :model="formModel"
              :rules="rules"
              label-placement="left"
      >
        <n-grid :cols="1" :x-gap="12">
          <n-form-item-gi label="数据源" path="dataSourceId">
            <n-select
                v-model:value="formModel.dataSourceId"
                :options="datasourceOptions"
                :size="'small'"
            />
          </n-form-item-gi>
          <n-form-item-gi path="sql">
            <n-input
                v-model:value="formModel.sql"
                type="textarea"
                placeholder="输入SQL语句"
                :clearable="true"
                :autosize=" {  minRows: 5,maxRows:12 }"
                @keydown.tab.prevent="insertTab"
            />
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </n-card>
    <n-space justify="center" align="center" class="mt-2">
      <n-button type="primary" class="w-28" @click="exec" :loading="isLoading">校验</n-button>
    </n-space>
    <n-input
        v-show="resRef.length > 0"
        class="mt-2"
        v-model:value="resRef"
        type="textarea"
        placeholder=""
        :autosize="true"
        readonly
    />
  </n-scrollbar>
</template>

<script setup lang="ts">
import {sql_valid} from "@render/api/datacenter";
import {datasourceOptions} from "@render/typings/datacenterOptions";
import {FormInst} from "naive-ui";
import {ref} from "vue";

const formRef = ref<FormInst | null>(null);

const formModel = ref({
  dataSourceId: '6',
  sql: ''
})

const rules = {
  dataSourceId: {
    required: true,
    trigger: ['change'],
    message: '请选择数据源'
  },
  sql: {
    key: 'table',
    required: true,
    trigger: ['change'],
    message: '请输入SQL'
  }
}

let paramModel = {
  id: '',
  sql: ''
}

const resRef = ref('');

const isLoading = ref(false)

const exec = () => {
  isLoading.value = true
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      paramModel.id = formModel.value.dataSourceId
      paramModel.sql = formModel.value.sql.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ')

      await sql_valid(paramModel).then((res) => {
        if (res.code == 0) {
          window.$message.success('校验成功')
          resRef.value = ''
        } else if (res.code == 401) {
          window.$message.error('此Token无权')
        } else {
          window.$message.error('校验失败，具体看返回结果')
          resRef.value = res.msg
        }

      }).finally(() => {
        isLoading.value = false
      })
    } else {
      console.log(errors)
    }
  })
}

const insertTab = (event: KeyboardEvent) => {
  const textarea = event.target as HTMLTextAreaElement;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  // Insert tab character
  formModel.value.sql = formModel.value.sql.substring(0, start) + '\t' + formModel.value.sql.substring(end);

  // Put cursor at right position again
  textarea.selectionStart = textarea.selectionEnd = start + 1;
}
</script>

<style scoped>

</style>
