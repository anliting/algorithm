import CompoundArrayContainer from './CompoundArrayContainer.js'
function Stack(){
    CompoundArrayContainer.call(this)
}
Object.setPrototypeOf(
    Stack.prototype,
    CompoundArrayContainer.prototype
)
export default Stack
