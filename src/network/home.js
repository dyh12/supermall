import {request} from './request'

export function getHomeMultidata(){
    return request({
        url: '/home/multidata'
    })
}

export function getHomeListData() { 
    return request({
        url:'/home/multidata'
    })
 }


 export class AddApi {
     constructor(bannerList,keywordsList){
        this.list1 = bannerList.list;
        this.list2 = keywordsList.list;
     }
 }