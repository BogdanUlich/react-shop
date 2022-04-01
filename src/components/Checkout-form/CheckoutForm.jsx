import React from "react"
import Select from "react-select"
import AsyncSelect from "react-select/async"
import { createOrder, fetchCities, fetchWarehouses } from "../../api"
import { useForm } from "react-hook-form"
import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"

const CheckoutForm = ({ addedItems }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  })

  const dispatch = useDispatch()

  const onChooseCity = (id) => {
    dispatch(fetchWarehouses(id))
  }

  const { warehouses } = useSelector(({ cart }) => cart)
  const { items } = useSelector(({ cart }) => cart)

  const optionsWarehouses = warehouses.map(function (obj) {
    return {
      value: obj.id,
      label: obj.name,
    }
  })

  const onSubmit = (data) => {
    const productsInfo = {}
    addedItems.map(
      (obj) =>
        (productsInfo[addedItems.indexOf(obj) + 1] = {
          id: obj.id,
          quantity: items[obj.id].items.length,
        })
    )
    data.products = productsInfo
    createOrder(JSON.stringify(data))
    reset()
  }

  return (
    <div className="product-ordering">
      <h2 className="product-ordering__title title">Оплата и доставка</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="product-ordering__form">
        <div className="product-ordering__input-group">
          <div className="product-ordering__input-wrapper">
            <label className="product-ordering__input-name">
              Имя <span>*</span>
              <input
                {...register("firstName", {
                  required: true,
                  pattern: /[А-Яа-я]/,
                })}
                className={classNames(
                  "product-ordering__input",
                  errors?.firstName && "product-ordering__input_warning"
                )}
                placeholder={errors.firstName ? "Поле обязательно к заполнению" : ""}
                type="text"
              />
            </label>
          </div>
          <div className="product-ordering__input-wrapper">
            <label className="product-ordering__input-name">
              Фамилия <span>*</span>
              <input
                {...register("lastName", {
                  required: true,
                  pattern: /[А-Яа-я]/,
                })}
                className={classNames(
                  "product-ordering__input",
                  errors?.lastName && "product-ordering__input_warning"
                )}
                placeholder={errors.lastName ? "Поле обязательно к заполнению" : ""}
              />
            </label>
          </div>
        </div>
        <label className="product-ordering__input-name">
          Номер телефона <span>*</span>
          <input
            {...register("phoneNumber", {
              required: true,
              pattern: /\+?[0-9\s\-\(\)]+/,
            })}
            className={classNames(
              "product-ordering__input",
              errors?.phoneNumber && "product-ordering__input_warning"
            )}
            type="tel"
          />
        </label>

        <h3 className="product-ordering__title">Укажите адрес доставки</h3>
        <div className="product-ordering__select-group">
          <AsyncSelect
            cacheOptions
            placeholder="Введите название города"
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.id}
            loadOptions={fetchCities}
            onChange={(e) => {
              onChooseCity(e.id)
              register("city", { value: e.name })
            }}
          />
          <Select
            options={optionsWarehouses}
            placeholder="Выберите отделение новой почты"
            onChange={(e) => {
              register("warehouse", { value: e.label })
            }}
          />
        </div>
        <h3 className="product-ordering__title">Способ оплаты</h3>
        <div className="product-ordering__switch">
          <div className="product-ordering__switch-wrapper">
            <input
              className="product-ordering__switch-btn"
              type="radio"
              name="paymentType"
              value="1"
              {...register("paymentType")}
            />
            <div className="product-ordering__switch-name">
              Оплата на карту (после подтверждения заказа Вам будет отправлен номер карты)
            </div>
          </div>
          <div className="product-ordering__switch-wrapper">
            <input
              className="product-ordering__switch-btn"
              type="radio"
              name="paymentType"
              value="2"
              {...register("paymentType")}
            />
            <div className="product-ordering__switch-name">
              Наложенный платёж (оплата при получении)
            </div>
          </div>
        </div>
        <h3 className="product-ordering__title">Детали</h3>
        <textarea
          className="product-ordering__textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          {...register("details")}
        ></textarea>
        <div className="product-ordering__btn">
          <input type="submit" className="btn-black" value="Оформить заказ" />
        </div>
      </form>
    </div>
  )
}

CheckoutForm.propTypes = {
  addedItems: PropTypes.arrayOf(PropTypes.object),
}

export default CheckoutForm
