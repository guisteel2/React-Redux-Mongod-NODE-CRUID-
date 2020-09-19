import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import {bindActionCreators} from 'redux'

import { markAsDone,markAsPending,remove } from './todoAction'

const  Todalista = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="btnGrid">
                    <IconButton style='sucess'  icon='check'   hide={todo.done}  onClick={()=>props.markAsDone(todo)}></IconButton>
                    <IconButton style='warning' icon='undo'    hide={!todo.done} onClick={()=>props.markAsPending(todo)}></IconButton>
                    <IconButton style='danger'  icon='trash-o' hide={!todo.done} onClick={()=>props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descricao</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}


const mapStatetoProps =state =>({list:state.todo.list})

const mapDispatchToptops = dispatch => 
bindActionCreators({markAsDone,markAsPending,remove},dispatch)

export default connect(mapStatetoProps,mapDispatchToptops)(Todalista)
