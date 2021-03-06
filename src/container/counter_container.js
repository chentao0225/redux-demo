import Counter from '../components/counter'
import {increment,decrement,incrementAsync} from '../redux/actions/counter_action'
import {connect} from 'react-redux'
//完整写法
// function mapReduxStateToProps(state){
//     return {count:state}
// }
// const mapReduxMethodToProps=dispatch=>({
//     increment:value=>dispatch(increment(value)),
//     decrement:value=>dispatch(decrement(value))
// })
//export default connect(mapReduxStateToProps,mapReduxMethodToProps)(Counter)
//简写

export default connect(state=>({count:state.count,persons:state.persons}),{increment,decrement,incrementAsync})(Counter)