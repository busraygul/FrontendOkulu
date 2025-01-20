function getData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof data === 'number'){
            let result = `Sonuç: ${data * 2}`; ;
            resolve(result);
        }else{
            reject('Lütfen bir sayı giriniz');
        }
        },2000); //2000 yazmamızın sebebi 2 saniye beklemesini istememizdir.
    });
}
getData(10)
.then((response)=> console.log(response))
.catch((error)=> console.error(error));