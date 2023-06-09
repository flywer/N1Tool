import {reactive} from "vue";

export const channels = reactive({
    window: {
        max: 'window/max',
        min: "window/min",
        close: "window/close"
    },
    ldDecrypt: {
        decrypt: 'ldDecrypt/decrypt'
    },
    ocr: {
        scan: 'ocr/scan'
    },
    svg: {
        saveSvgFile: 'svg/saveSvgFile'
    },
    datacenter: {
        request: 'datacenter/request',
        dataSourceList: 'datacenter/dataSourceList',
        checkInsertSql: 'datacenter/checkInsertSql',
        addWorkFlow: 'datacenter/addWorkFlow',
        getColumns: 'datacenter/getColumns',
        jobList: 'datacenter/jobList',
        personList: 'datacenter/personList',
        getTables: 'datacenter/getTables',
        buildDataXJson: 'datacenter/buildDataXJson',
        addDataXJob: 'datacenter/addDataXJob',
        addSchedTask: 'datacenter/addSchedTask',
        execSql: 'datacenter/execSql',
        sqlValid: 'datacenter/sqlValid',
        authTokenNotice: 'datacenter/authTokenNotice',
        createTable: 'datacenter/createTable',
        getWorkflowPage: 'datacenter/getWorkflowPage',
        getCjJobPage: 'datacenter/getCjJobPage',
        getSchedJobPage: 'datacenter/getSchedJobPage',
        workflowActive: 'datacenter/workflowActive',
        cjJobStart: 'datacenter/cjJobStart',
        cjJobStop: 'datacenter/cjJobStop',
        cjJobRun: 'datacenter/cjJobRun',
        schedJobDelete: 'datacenter/schedJobDelete',
        cjJobDelete: 'datacenter/cjJobDelete',
        workflowRun: 'datacenter/workflowRun',
        workflowDelete: 'datacenter/workflowDelete',
        getTablesInfo: 'datacenter/getTablesInfo',
        tablePreview: 'datacenter/tablePreview',
        tableDelete: 'datacenter/tableDelete',
        getDataxJobLog: 'datacenter/getDataxJobLog',
        createValidConfig: 'datacenter/createValidConfig',
        getValidConfigPage: 'datacenter/getValidConfigPage',
        workflowRerun: 'datacenter/workflowRerun',
        login: 'datacenter/login',
        getUsrcOrgTree: 'datacenter/getUsrcOrgTree',
        getDictByName: 'datacenter/getDictByName',
        getDictListById: 'datacenter/getDictListById',
        workflowLog: 'datacenter/workflowLog',
        inspHomeList: 'datacenter/inspHomeList',
        getInpsRecordPage: 'datacenter/getInpsRecordPage',

    },
    auxiliaryDb: {
        getProjectInfo: 'auxiliaryDb/getProjectInfo',
        updateProjectInfo: 'auxiliaryDb/updateProjectInfo',
        findByProjectId: 'auxiliaryDb/findByProjectId',
        getProjectByProAbbr: 'auxiliaryDb/getProjectByProAbbr',

        getAuthToken: 'auxiliaryDb/getAuthToken',
        updateAuthToken: 'auxiliaryDb/updateAuthToken',

        getTableSql: 'auxiliaryDb/getTableSql',
        updateTableSql: 'auxiliaryDb/updateTableSql',

        getRhJson: 'auxiliaryDb/getRhJson',
        getRhJsonById: 'auxiliaryDb/getRhJsonById',
        updateRh1Json: 'auxiliaryDb/updateRh1Json',
        updateRh2Json: 'auxiliaryDb/updateRh2Json',

        getZjJson: 'auxiliaryDb/getZjJson',
        getZjJsonById: 'auxiliaryDb/getZjJsonById',
        updateZjJson: 'auxiliaryDb/updateZjJson',

        getPreDatabaseDepart: 'auxiliaryDb/getPreDatabaseDepart',
        getPreDatabaseTableInfoJson: 'auxiliaryDb/getPreDatabaseTableInfoJson',
        updateTableInfoJson: 'auxiliaryDb/updateTableInfoJson',

        getSztkDict: 'auxiliaryDb/getSztkDict',
        saveSztkDict: 'auxiliaryDb/saveSztkDict',
        getParentDict: 'auxiliaryDb/getParentDict',
        getDictByParentId: 'auxiliaryDb/getDictByParentId',
        getDictByBzId: 'auxiliaryDb/getDictByBzId',

    },
    cron: {
        createCronJob: 'cron/createCronJob',
        datacenterCronJobInit: 'cron/datacenterCronJobInit',
    },
    app: {
        relaunch: 'app/relaunch'
    },
    xlsx: {
        createDataInpsStat: 'xlsx/createDataInpsStat'
    }

})
