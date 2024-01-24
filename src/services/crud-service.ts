import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import useBaseService from './base-service'

const useCrudService = <EntityModel, EntityCreateModel, EntityUpdateModel>() => {
    const baseService: AxiosInstance = useBaseService()

    const auth = (
        data: { user: string; password: string },
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<EntityModel>> => {
        console.log('the data which was get from login form ===>> ', data)
        return baseService.get('users/1', config)
    }

    const createEntity = (
        api: string,
        entity: EntityCreateModel,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<EntityModel>> => {
        return baseService.post(api, entity, config)
    }

    const getEntity = (
        api: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<EntityModel>> => {
        return baseService.get(api, config)
    }

    const getEntityList = (
        api: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Array<EntityModel>>> => {
        return baseService.get(api, config)
    }

    const updateEntity = (
        api: string,
        updatedEntity: EntityUpdateModel,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<EntityModel>> => {
        return baseService.put(api, updatedEntity, config)
    }

    const deleteEntity = (
        api: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<EntityModel>> => {
        return baseService.delete(api, config)
    }

    return { baseService, auth, createEntity, getEntity, getEntityList, updateEntity, deleteEntity }
}

export default useCrudService