import React from 'react';
import { Stepper, Step } from 'react-form-stepper';

const CheckoutSteps = (props) => {
    return (
        <div className="row container checkout-steps">
            <Stepper activeStep={0}>
                <Step className={props.step1 ? 'active' : ''} label="Войти" />
                <Step className={props.step2 ? 'active' : ''} label="Данные" />
                <Step className={props.step3 ? 'active' : ''} label="Выбор платежа" />
                <Step className={props.step4 ? 'active' : ''} label="Подтверждение заказа" />
            </Stepper>
        </div>
    );
};

export default CheckoutSteps;