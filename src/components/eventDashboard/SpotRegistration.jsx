import { useForm } from "react-hook-form";
import { useState } from "react";
import { useCreateParticipant } from "../../hooks/queries/useCreateParticipant";

export default function SpotRegistration({ eventId }) {
  const [step, setStep] = useState(1);
  const mutation = useCreateParticipant(eventId);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      stay: false,
      food: false
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="wide-card">
      <h3>Spot Registration</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
            <input
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
            {errors.name && <p>Name required</p>}

            <input
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && <p>Phone required</p>}

            <button type="button" onClick={() => setStep(2)}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>
              <input type="checkbox" {...register("stay")} />
              Need Stay
            </label>

            <label>
              <input type="checkbox" {...register("food")} />
              Need Food
            </label>

            <button type="submit" disabled={mutation.isLoading}>
              Register & Generate QR
            </button>
          </>
        )}
      </form>
    </div>
  );
}


// import { useState } from "react";

// export default function SpotRegistration() {
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     stay: false,
//     food: false
//   });

//   return (
//     <div className="wide-card">
//       <h3>Spot Registration</h3>

//       {step === 1 && (
//         <>
//           <input
//             placeholder="Full Name"
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//           />
//           <input
//             placeholder="Phone"
//             onChange={(e) =>
//               setForm({ ...form, phone: e.target.value })
//             }
//           />
//           <button onClick={() => setStep(2)}>Next</button>
//         </>
//       )}

//       {step === 2 && (
//         <>
//           <label>
//             <input
//               type="checkbox"
//               onChange={(e) =>
//                 setForm({ ...form, stay: e.target.checked })
//               }
//             />
//             Need Stay
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               onChange={(e) =>
//                 setForm({ ...form, food: e.target.checked })
//               }
//             />
//             Need Food
//           </label>

//           <button onClick={() => setStep(3)}>Next</button>
//         </>
//       )}

//       {step === 3 && (
//         <>
//           <pre>{JSON.stringify(form, null, 2)}</pre>
//           <button>Register & Generate QR</button>
//         </>
//       )}
//     </div>
//   );
// }
