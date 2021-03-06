import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMy } from '../actions/order';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function OrderHistoryScreen(props) {
    const orderMyList = useSelector((state) => state.orderMyList);
    const { loading, error, orders } = orderMyList;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(listOrderMy())
    }, [dispatch]);

    return (
        <div className="container">
            <h1>История заказов</h1>
            {loading ? <LoadingBox></LoadingBox> : 
            error ? <MessageBox variant="danget">{error}</MessageBox> 
            : (
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Заказ</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Сумма</th>
                        <th scope="col">Оплачено</th>
                        <th scope="col">Разное</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.itemsPrice.toFixed(2)}</td>
                                <td>{order.isPaid ? order.paidAt.substring(0,10) : 'Нет'}</td>
                                <td>
                                    <button type="button" className="small table-button" onClick={() => {props.history.push(`/order/${order._id}`)}}>Детали</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default OrderHistoryScreen;