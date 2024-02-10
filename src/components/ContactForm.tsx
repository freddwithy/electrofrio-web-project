const DATO_CONSULTA = [
    {
      title: 'Nombre',
      placheHolder: 'Alfredo',
      typeIs: ''
    },
    {
      title: 'Apellido',
      placheHolder: 'Gonzalez',
      typeIs: ''
    },
    {
      title: 'Email',
      placheHolder: 'alfredogonzalez@gmail.com',
      typeIs: 'email'
    },
    {
      title: 'Telefono',
      placheHolder: '0991123123',
      typeIs: 'tel'
    },
    {
      title: 'Consulta',
      placheHolder: 'Necesito un presupuesto para instalación de un Aire Acondicionado...',
      typeIs: 'text',
    }
]


const ContactForm = () => {
  return (
      <form className="max-w-sm mt-2">
          {DATO_CONSULTA.map(({ title, typeIs, placheHolder }) => (
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
              {typeIs !== 'text' ? <input type={typeIs} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placheHolder} required/> 
                : 
                <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none h-60" placeholder={placheHolder}></textarea>
              }
            </div>
          ))}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Mandar</button>
      </form>
  )
}

export default ContactForm