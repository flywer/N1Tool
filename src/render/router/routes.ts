import {RouteRecordRaw} from 'vue-router'

const ldDecrypt = () => import ('@render/views/ldDecrypt/index.vue')
const ocr = () => import('@render/views/ocr/index.vue')
const svg = () => import('@render/views/svgConvert/index.vue')
const flattenText = () => import('@render/views/flattenText/index.vue')
const jobCreate = () => import('@render/views/jobCreate/index.vue')
const cjJob = () => import('@render/views/cjJob/index.vue')
const zjJob = () => import('@render/views/zjJob/index.vue')
const bfJob = () => import('@render/views/bfJob/index.vue')
const qcJob = () => import('@render/views/qcJob/index.vue')
const rhJob = () => import('@render/views/rhJob/index.vue')
const rkJob = () => import('@render/views/rkJob/index.vue')
const gxJob = () => import('@render/views/gxJob/index.vue')
const projectMgt = () => import('@render/views/projectMgt/index.vue')
const execSql = () => import('@render/views/sqlProcess/sqlExec/sqlExecTab.vue')
const sqlValid = () => import('@render/views/sqlProcess/sqlValid/sqlValidTab.vue')
const hiveSqlTrans = () => import('@render/views/sqlProcess/sqlTrans/sqlTransTab.vue')
const projectAbbr = () => import('@render/views/projectAbbr/index.vue')
const sqlProcess = () => import('@render/views/sqlProcess/index.vue')
const settings = () => import('@render/views/settings/index.vue')
const createTable = () => import('@render/views/createTable/index.vue')
const preDatabase = () => import('@render/views/preDatabase/index.vue')
const sztkDict = () => import('@render/views/sztkDict/index.vue')
const dataStat = () => import('@render/views/dataStat/index.vue')

export const routeName = {
    home: 'home',
    ldDecrypt: 'ldDecrypt',
    ocr: 'ocr',
    svg: 'svg',
    flattenText: 'flattenText',
    jobCreate: 'jobCreate',
    cjJob: 'cjJob',
    zjJob: 'zjJob',
    bfJob: 'bfJob',
    qcJob: 'qcJob',
    rkJob: 'rkJob',
    gxJob: 'gxJob',
    rhJob: 'rhJob',
    execSql: 'execSql',
    sqlValid: 'sqlValid',
    sqlProcess: 'sqlProcess',
    hiveSqlTrans: 'hiveSqlTrans',
    projectAbbr: 'projectAbbr',
    createTable: 'createTable',
    settings: 'settings',
    projectMgt: 'projectMgt',
    preDatabase: 'preDatabase',
    sztkDict: 'sztkDict',
    dataStat: 'dataStat'
}

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/projectMgt/index',
    },
    {
        name: routeName.ldDecrypt,
        path: '/ldDecrypt/index',
        component: ldDecrypt
    },
    {
        name: routeName.ocr,
        path: '/ocr/index',
        component: ocr
    },
    {
        name: routeName.svg,
        path: '/svg/index',
        component: svg
    },
    {
        name: routeName.flattenText,
        path: '/flattenText/index',
        component: flattenText
    },
    {
        name: routeName.jobCreate,
        path: '/jobCreate/index',
        component: jobCreate
    },
    {
        name: routeName.cjJob,
        path: '/cjJob/index',
        component: cjJob
    },
    {
        name: routeName.execSql,
        path: '/execSql/index',
        component: execSql
    },
    {
        name: routeName.sqlValid,
        path: '/sqlValid/index',
        component: sqlValid
    },
    {
        name: routeName.hiveSqlTrans,
        path: '/hiveSqlTrans/index',
        component: hiveSqlTrans
    },
    {
        name: routeName.projectAbbr,
        path: '/projectAbbr/index',
        component: projectAbbr
    },
    {
        name: routeName.zjJob,
        path: '/zjJob/index',
        component: zjJob
    }, {
        name: routeName.bfJob,
        path: '/bfJob/index',
        component: bfJob
    },
    {
        name: routeName.settings,
        path: '/settings/index',
        component: settings
    },
    {
        name: routeName.qcJob,
        path: '/qcJob/index',
        component: qcJob
    },
    {
        name: routeName.rkJob,
        path: '/rkJob/index',
        component: rkJob
    },
    {
        name: routeName.gxJob,
        path: '/gxJob/index',
        component: gxJob
    },
    {
        name: routeName.sqlProcess,
        path: '/sqlProcess/index',
        component: sqlProcess
    },
    {
        name: routeName.createTable,
        path: '/createTable/index',
        component: createTable
    },
    {
        name: routeName.createTable,
        path: '/createTable/index',
        component: createTable
    },
    {
        name: routeName.rhJob,
        path: '/rhJob/index',
        component: rhJob
    },
    {
        name: routeName.projectMgt,
        path: '/projectMgt/index',
        component: projectMgt
    },
    {
        name: routeName.preDatabase,
        path: '/preDatabase/index',
        component: preDatabase
    },
    {
        name: routeName.sztkDict,
        path: '/sztkDict/index',
        component: sztkDict
    },
    {
        name: routeName.dataStat,
        path: '/dataStat/index',
        component: dataStat
    },
]
