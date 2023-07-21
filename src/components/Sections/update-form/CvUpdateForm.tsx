import classNames from 'classnames';
import {FC, FormEvent, memo, useRef} from 'react';

import {CvData, CvUpdateFormProps} from '../../../data/dataDef';

const CvUpdateForm: FC<CvUpdateFormProps> = memo(({onAddExperience}) => {
  const companyInputRef = useRef<HTMLInputElement>(null);
  const roleInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const pieceInputRef = useRef<HTMLInputElement>(null);

  function submitCvHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (companyInputRef.current && roleInputRef.current && dateInputRef.current && pieceInputRef.current) {
      const enteredCompany = companyInputRef.current.value;
      const enteredRole = roleInputRef.current.value;
      const enteredDate = dateInputRef.current.value;
      const enteredPiece = pieceInputRef.current.value;

      const cvData: CvData = {
        company: enteredCompany,
        role: enteredRole,
        date: enteredDate,
        piece: enteredPiece,
      };

      onAddExperience(cvData);
      companyInputRef.current.value = '';
      roleInputRef.current.value = '';
      dateInputRef.current.value = '';
      pieceInputRef.current.value = '';
    }
  }

  return (
    <form onSubmit={submitCvHandler}>
      <h2 className="text-center text-2xl font-thin uppercase text-white">Work Experience</h2>
      <div className={classNames('flex flex-col items-end')}>
        <div className="p-5">
          <label className=" p-2 font-normal text-white" htmlFor="company">
            Company
          </label>
          <input id="company" ref={companyInputRef} required type="text" />
        </div>
        <div className=" p-5">
          <label className=" p-2 text-left font-normal text-white" htmlFor="role">
            Role
          </label>
          <input id="role" ref={roleInputRef} required type="text" />
        </div>
        <div className="p-5">
          <label className=" p-2 text-left font-normal text-white" htmlFor="date">
            Date
          </label>
          <input id="date" ref={dateInputRef} required type="text" />
        </div>
        <div className="p-5">
          <label className=" p-2 text-left font-normal text-white" htmlFor="piece">
            Piece
          </label>
          <input id="piece" ref={pieceInputRef} required type="text" />
        </div>
        <div className="m-10 rounded-2xl bg-neutral-400 p-2 ">
          <button className="rounded-2xl" type="submit">
            Add Experience
          </button>
        </div>
      </div>
    </form>
  );
});
CvUpdateForm.displayName = 'CvUpdateForm';
export default CvUpdateForm;
