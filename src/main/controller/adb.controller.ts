import {AppDataSource} from "@main/data-source";
import {Dict} from "@main/entity/Dict";
import {JobJson} from "@main/entity/JobJson";
import {ProjectInfo} from "@main/entity/ProjectInfo";
import {TableSql} from "@main/entity/TableSql";
import {channels} from "@render/api/channels";
import {Controller, IpcHandle} from "einf";
import {Like} from "typeorm";

@Controller()
export class AdbController {
    constructor() {
    }

    @IpcHandle(channels.auxiliaryDb.getProjectInfo)
    public async handleGetProjectInfo() {
        return await AppDataSource.manager.find(ProjectInfo)
    }

    @IpcHandle(channels.auxiliaryDb.updateProjectInfo)
    public async handleUpdateProjectInfo(arr: any) {
        arr = JSON.parse(arr)
        const projectInfoList: ProjectInfo[] = arr.map((
            v => ({
                id: v.id || null,
                projectId: v.projectId,
                projectName: v.projectName,
                projectAbbr: v.projectAbbr,
                tableAbbr: v.tableAbbr
            })
        ));

        return await AppDataSource.getRepository(ProjectInfo).save(projectInfoList as ProjectInfo[])
    }

    @IpcHandle(channels.auxiliaryDb.findByProjectId)
    public async handleFindByProjectId(projectId: string) {
        return await AppDataSource.getRepository(ProjectInfo).findOneBy({
            projectId: projectId
        })
    }

    @IpcHandle(channels.auxiliaryDb.getAuthToken)
    public async handleGetAuthToken() {
        return await AppDataSource.getRepository(Dict).findOneBy({
            name: 'authToken'
        })
    }

    @IpcHandle(channels.auxiliaryDb.updateAuthToken)
    public async handleUpdateAuthToken(token: string) {
        const dict = await AppDataSource.getRepository(Dict).findOneBy({
            name: 'authToken'
        });
        dict.value = token
        return await AppDataSource.manager.save(dict)
    }

    @IpcHandle(channels.auxiliaryDb.getTableSql)
    public async handleGetTableSql(obj: any) {
        if (typeof obj !== 'undefined') {
            obj = JSON.parse(obj)
        }
        return await AppDataSource.manager.find(TableSql, {
            where: [
                {
                    tableName: Like(`%${obj?.tableName || ''}%`)
                },
                {
                    comment: Like(`%${obj?.comment || ''}%`)
                },
                {
                    sql: Like(`%${obj?.sql || ''}%`)
                }
            ]
        })
    }

    @IpcHandle(channels.auxiliaryDb.updateTableSql)
    public async handleUpdateTableSql(obj: any) {
        return await AppDataSource.getRepository(TableSql).save(obj)
    }

    @IpcHandle(channels.auxiliaryDb.getRhJson)
    public async handleGetJobJson(tableName?: string) {
        return await AppDataSource.getRepository(JobJson).find({
            select: ['id', 'tableName', 'rhJson'],
            where: {
                tableName: Like(`%${tableName || ''}%`)
            }
        })
    }

    @IpcHandle(channels.auxiliaryDb.updateRhJson)
    public async handleUpdateRhJson(obj: any) {
        obj = JSON.parse(obj)
        if (obj.id === null) {
            return await AppDataSource.getRepository(JobJson).createQueryBuilder()
                .insert()
                .into(JobJson)
                .values([{
                    rhJson: obj.json,
                    tableName: obj.tableName
                }])
                .execute()
        } else {
            return await AppDataSource.getRepository(JobJson).createQueryBuilder()
                .update(JobJson)
                .set({
                    rhJson: obj.json,
                    tableName: obj.tableName
                })
                .where("id = :id", {id: obj.id})
                .execute()
        }
    }
}