;(async()=>{
    let CompoundArrayContainer=
        await module.repository.template.CompoundArrayContainer
    function Stack(){
        CompoundArrayContainer.call(this)
    }
    Object.setPrototypeOf(
        Stack.prototype,
        CompoundArrayContainer.prototype
    )
    return Stack
})()
