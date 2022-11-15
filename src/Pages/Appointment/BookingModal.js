import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatement, selectedDate}) => {
    const { name } = treatement;
    const date = format(selectedDate,'PP')
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className="grid grid-cols-1 gap-3 mt-10">
                        <input type="text" value={date} disabled className="input w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                        <input type="submit" className='max-w-xs btn btn-accent w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;