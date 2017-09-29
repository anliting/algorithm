export default new Promise(rs=>{
    document.body.appendChild(
        Object.assign(document.createElement('script'),{
            src:'https://gitcdn.link/cdn/anliting/module/f53c0bb818f4cfebd086060e2b5f5ce7eac7300c/src/module.js',
            onload(){
                rs(this.__module.load)
                document.body.removeChild(this)
            },
        })
    )
})
