import "whatwg-fetch";

export  function get(url,params={}){

    return new Promise((resolve,rejects)=>{
        let paramsStr = '';

        // 对每一项进行遍历  ，Object.entries将对象转换成每个元素带key和value的数组
        Object.entries(params).forEach(([key,value],index)=>{
            paramsStr +=  index===0 ? '':'&';   //判断该项是否为第一向，如果是不加&，否则在prampsStr的基础上加&

            // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码 javaScript函数
            let val = encodeURIComponent(value);  //将value值做编码处理，便于阅读

            paramsStr += `${key}=${val}`;  //第一项遍历完是key=value，第二项遍历完是key=value&key=value  依次下来
        })
        fetch(`${url}?${paramsStr}`,{
            'method':'GET'
        })
        .then((response)=>{
        return response.json();
        })
        .then(data=>{
            return resolve(data)
        })
        .catch(error=>console.log(error))
    });


    

}
export function post(url,params={}){

    return new Promise((resolve,rejects)=>{
        fetch(url,{
            'method':'POST' ,
            'body':params
        })
        .then((response)=>{
           return  response.json();
        })
        .then((data)=>{
            return resolve(data);
        })
        .catch((error)=>console.log(error));
    });

    
}

export default{
    get,
    post
}