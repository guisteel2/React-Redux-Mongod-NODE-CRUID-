import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodaList from '../todo/todoList'

export default props => (
    <div>
               <PageHeader name='Tarefas' small="cadastro" />
               <TodoForm></TodoForm>
               <TodaList></TodaList>
            </div>
)
