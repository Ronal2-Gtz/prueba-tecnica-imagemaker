import { Modal } from 'antd'
import { useState } from 'react'
import { Button, Input } from '../../../components'
import { useForm } from 'react-hook-form'

export const CreateAddresseeModal = (): React.ReactElement => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const handleOpenCloseModal = (): void => setIsModalOpen(!isModalOpen)
	const { register } = useForm()

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
				width={'90% '}
			>
				<div className='w-full px-10 py-5	'>
					<p className='text-2xl pb-10 '>Nuevo beneficiario</p>
					<form className='w-full grid grid-cols-12 items-center gap-y-3 md:gap-7 '>
						<div className='col-span-12 md:col-span-6'>
							<Input register={register} name='rut' label='Rut' placeholder='Ingrese Rut' />
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Input register={register} name='email' label='E-mail' placeholder='Ingrese e-mail' />
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
							<Input register={register} name='alias' label='Alias' placeholder='Ingrese un alias' />
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Input register={register} name='accountNumber' label='N° cuenta' placeholder='Ingrese N° cuenta'/>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<Input register={register} name='currency' label='Moneda' placeholder='Ingrese Moneda'/>
						</div>
						<div className='col-span-12 md:col-start-7  md:col-span-6'>
							<Input register={register} name='banks' label='Bancos' placeholder='Ingrese banco'/>
						</div>
						<div className='col-span-12 mt-5 md:col-start-8 md:col-span-5'>
							<Button type='button' appearance='secondaryTransparent' onClick={handleOpenCloseModal}>
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
