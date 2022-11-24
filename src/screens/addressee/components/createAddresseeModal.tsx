import { Modal } from 'antd'
import { useState } from 'react'
import { Button, Input } from '../../../components'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { AddresseeParams } from '../../../services/addresseeService'
import { useAppDispatch } from '../../../hooks/useDispatch'
import { addAddresseeThunks } from '../../../store/addressee/AddresseeThunk'
import { Select } from '../../../components/select/index';
import { currencyOpt } from '../selectOpt'

export const CreateAddresseeModal = (): React.ReactElement => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const handleOpenCloseModal = (): void => setIsModalOpen(!isModalOpen)
	const { register, handleSubmit } = useForm()

	const addAddressee: SubmitHandler<FieldValues> = (data) => {
		const addAddresseeData: AddresseeParams = {
			rut: data.rut,
			name: data.name,
			alias: data.alias,
			detail: {
				currency: data.currency,
				acc_numbr: data.accountNumber,
				adr_email: data.email,
				bank_id: data.accountNumber,
				bank_name: data.bank,
			},
		}
		dispatch(addAddresseeThunks(addAddresseeData))
		handleOpenCloseModal()
	}

	return (
		<>
			<Button size='xs' onClick={handleOpenCloseModal}>
				Agregar
			</Button>
			<Modal
				className='boder'
				centered
				footer={null}
				open={isModalOpen}
				onCancel={handleOpenCloseModal}
				width={'70% '}
			>
				<div className='w-full px-10 py-5	'>
					<div className='pb-10'>
						<p className='font-semibold text-3xl '>
							Nuevo beneficiario
						</p>
						<hr className='w-[7%] lg:w-[5%] xl:w-[3%] mt-5 ' />
					</div>
					<form
						onSubmit={handleSubmit(addAddressee)}
						className='w-full grid grid-cols-12 items-center gap-y-3 md:gap-7 '
					>
						<div className='col-span-12 md:col-span-6'>
							<Input
								register={register}
								name='rut'
								label='Rut'
								placeholder='Ingrese Rut'
							/>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Input
								register={register}
								name='email'
								label='E-mail'
								placeholder='Ingrese e-mail'
							/>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Input
								register={register}
								name='name'
								label='Nombre / razón social'
								placeholder='Ingrese nombre completo'
							/>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Input
								register={register}
								name='alias'
								label='Alias'
								placeholder='Ingrese un alias'
							/>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Input
								register={register}
								name='accountNumber'
								label='N° cuenta'
								placeholder='Ingrese N° cuenta'
							/>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Select
								register={register}
								name='currency'
								label='Moneda'
								placeholder='Ingrese Moneda'
								data={currencyOpt}
							/>
						</div>
						<div className='col-span-12 md:col-start-7  md:col-span-6'>
							<Input
								register={register}
								name='bank'
								label='Bancos'
								placeholder='Ingrese banco'
							/>
						</div>
						<div className='flex justify-end col-span-12 mt-5 '>
							<Button
								type='button'
								appearance='secondaryTransparent'
								onClick={handleOpenCloseModal}
							>
								Cancel
							</Button>
							<Button
								type='submit'
								rounded='full'
								appearance='outLineSecondary'
							>
								Aprobar
							</Button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	)
}
