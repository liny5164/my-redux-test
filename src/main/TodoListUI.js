import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <Fragment>
            <div style={{ width: '400px' }}>
                <Input placeholder="Basic usage" value={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }} onChange={props.changeInputValue} />
                <Button type="primary" onClick={props.clickBtn}>add</Button>
                <div className='mt20' style={{ width: '100%' }}>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem={(item, index) =>
                            <List.Item className='mouse-hover' onClick={() => props.delItem(index)}>
                                {item}
                            </List.Item>}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default TodoListUI;