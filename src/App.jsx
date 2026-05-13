import './App.css'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [prediction, setPrediction] = useState(0)
  const createIdempotencyKey = () => {

  return crypto.randomUUID()

}

const getToken = async () => {

  const response = await fetch(
    'https://loan-prediction-api-pdr2.onrender.com/token',
    {

      method: 'GET',

      headers: {
        'Content-Type': 'application/json'
      }

    }
  )

  if (!response.ok) {

    throw new Error('Failed to get token')

  }

  const data = await response.json()

  // FastAPI usually returns:
  // { access_token: "...", token_type: "bearer" }

  return data.token

}

const handleSubmit = async (e) => {

  e.preventDefault()

  try {

    // create idempotency key

    const idemKey = createIdempotencyKey()

    // get JWT token

    const token = await getToken()
    console.log("TOKEN:", token)

    console.log(
      "AUTH HEADER:",
      `Bearer ${token}`
    )

    // call predict route

    const response = await fetch(
      'https://loan-prediction-api-pdr2.onrender.com/predict',
      {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

          // JWT authentication

          Authorization: `Bearer ${token}`,

          // idempotency header

          'Idempotency-Key': idemKey

        },

        body: JSON.stringify({

          income: Number(formData.income),

          savings: Number(formData.savings),

          expenses: Number(formData.expenses),

          family_size: Number(formData.family_size),

          years_employed: Number(formData.years_employed),

          age: Number(formData.age),

          rent: Number(formData.rent),

          debt: Number(formData.debt)

        })

      }
    )

    if (!response.ok) {

      const err = await response.json()

      console.log(err)

      throw new Error(
        err.detail || 'Prediction failed'
      )

    }

    const data = await response.json()

    console.log(data)

    // example:
    // { prediction: 25000 }

    setPrediction(data["predicted loan"])

    setShowModal(true)

  }

  catch(error) {

    console.error(error)

    alert(error.message)

  }

}
  const [formData, setFormData] = useState({

  income: "",
  savings: "",
  expenses: "",
  family_size: "",
  years_employed: "",
  age: "",
  rent: "",
  debt: ""

})
const handleChange = (e) => {

  setFormData({

    ...formData,

    [e.target.name]: e.target.value

  })

}

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)'
      }}
    >

      <div
        className="shadow-lg main-card"
        style={{
          width: '90%',
          maxWidth: '900px',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '25px',
          padding: '25px',
          margin: '0 auto'
        }}
      >

        <h1
          className="text-center fw-bold mb-3"
          style={{
            color: '#4f46e5',
            fontSize: '55px'
          }}
        >
          Loan Affordability Prediction Model
        </h1>

        <form onSubmit={handleSubmit}>

          <table
            className="mx-auto"
            style={{
              borderCollapse: 'separate',
              borderSpacing: '0 1px',
              margin: '0 auto'
            }}
          >

            <tbody>

              {[
                'Income',
                'Savings',
                'Expenses',
                'Family Size',
                'Years Employed',
                'Age',
                'Rent',
                'Debt'
              ].map((item) => (

                <tr key={item}>

                  <td
                    style={{
                      width: '220px',
                      textAlign: 'left',
                      paddingRight: '20px',
                      fontWeight: 'custom-label',
                      fontSize: '22px'
                    }}
                  >
                    {item}
                  </td>

                  <td>

                    <input
                       type="number"
                      className="form-control custom-input"
                        name={item.toLowerCase().replaceAll(' ', '_')}
                        value={
                          formData[
                            item.toLowerCase().replaceAll(' ', '_')
                          ]
                        }
                        onChange={handleChange}
                        className="form-control custom-input"
                        placeholder={`Enter ${item.toLowerCase()}`}
                                            style={{
                                              width: '320px',
                                              height: '42px'
                                            }}
                                          />

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <div className="text-center mt-3">

            <button
              type="submit"
              className="btn fw-bold"
              style={{
                background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '10px 35px',
                fontSize: '22px'
              }}
            >
              Submit
            </button>

          </div>

        </form>

         {/* Modal Popup */}
         

      {showModal && (

        <div
          className="modal d-block"
          tabIndex="-1"
          style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '30px',
      borderRadius: '20px',
      zIndex: '9999',
      width: '350px',
      textAlign: 'center',
      boxShadow: '0 0 25px rgba(0,0,0,0.3)'
    
          }}
        >

          <div className="modal-dialog modal-dialog-centered">

            <div
              className="modal-content"
              style={{
                borderRadius: '20px'
              }}
            >

              <div className="modal-header">

                <h3
                  className="modal-title fw-bold"
                  style={{ color: '#4f46e5' }}
                >
                  Prediction Result
                </h3>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                >
                </button>

              </div>

              <div className="modal-body text-center">

                <h2
                  style={{
                    color: '#16a34a',
                    fontSize: '50px',
                    fontWeight: 'bold'
                  }}
                >
                  ${prediction}
                </h2>

              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      </div>

    </div>
  )
}

export default App