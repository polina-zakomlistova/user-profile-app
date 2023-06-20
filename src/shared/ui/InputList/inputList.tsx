// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store';

// interface CheckboxGroupProps {
//     name: string;
//     rootState: RootState;
//     toggleCheckbox: (name: string, value: string, checked: boolean) => void;
// }

// const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
//     name,
//     rootState,
//     toggleCheckbox,
// }) => {
//     const dispatch = useDispatch();
//     const checkboxList = useSelector((state: RootState) => state.checkboxList);

//     const handleCheckboxChange = (value: string, checked: boolean) => {
//         dispatch(toggleCheckbox(name, value, checked));
//     };

//     return (
//         <div>
//             {checkboxList.map((option) => (
//                 <div key={option.value}>
//                     <label>
//                         <input
//                             type="checkbox"
//                             value={option.value}
//                             checked={option.checked}
//                             onChange={(e) =>
//                                 handleCheckboxChange(
//                                     option.value,
//                                     e.target.checked
//                                 )
//                             }
//                         />
//                         {option.label}
//                     </label>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CheckboxGroup;
