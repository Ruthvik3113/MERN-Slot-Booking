import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface Event {
    start: Date;
    end: Date;
    title: string;
}

const timeSlots = [
    '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
    '10:00 PM'
];


const CalendarView: React.FC = () => {
    const initialEvents = JSON.parse(localStorage.getItem('bookedEvents') || '[]');
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    useEffect(() => {
        const storedEvents = localStorage.getItem('bookedEvents');
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        }
    }, []);

    const handleBookAppointment = () => {
        if (selectedDate && selectedTimeSlot) {
            const newEvent = {
                start: selectedDate,
                end: moment(selectedDate).add(30, 'minutes').toDate(),
                title: `Booked: ${selectedTimeSlot}`,
            };

            const updatedEvents = [...events, newEvent];
            setEvents(updatedEvents);


            localStorage.setItem('bookedEvents', JSON.stringify(updatedEvents));

            alert(`You have successfully booked the appointment for ${selectedDate.toLocaleDateString()} at ${selectedTimeSlot}`);
            setEvents([...events, newEvent]);

            setSelectedDate(null);
            setSelectedTimeSlot('');
        }
    };

    const handleDeleteAppointment = (event: Event) => {
        const confirmed = window.confirm('Are you sure you want to delete this booking?');
        if (confirmed) {
            const updatedEvents = events.filter((e) => e !== event);
            setEvents(updatedEvents);

            // Save events to local storage
            localStorage.setItem('bookedEvents', JSON.stringify(updatedEvents));
        }
    };

    const handleSelectSlot = (slotInfo: any) => {
        setSelectedDate(slotInfo.start);
        setSelectedTimeSlot('');
    };

    const handleSelectTimeSlot = (timeSlot: string) => {
        setSelectedTimeSlot(timeSlot);
    };

    const customEventComponent = ({ event }: { event: Event }) => (
        <div
            onClick={() => handleDeleteAppointment(event)}
            className="cursor-pointer bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
            {event.title}
        </div>
    );



    return (
        <div className="mt-8 mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-600">Secure your preferred time slot by booking it at your convenience.</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '590px', width: '100%' }}
                className="bg-slate-400 rounded shadow"
                selectable
                onSelectSlot={handleSelectSlot}
                selected={selectedDate} // Highlight the selected date
                components={{
                    event: customEventComponent,
                }}
                dayPropGetter={(date) => {
                    const isDateSelected = selectedDate && moment(date).isSame(selectedDate, 'day');
                    return {
                        style: {
                            background: isDateSelected ? 'rgb(59 130 246)' : undefined,
                            cursor: 'pointer',
                        },
                        onClick: () => {
                            if (isDateSelected) {
                                setSelectedDate(null); // Deselect the date
                            } else {
                                setSelectedDate(date); // Select the clicked date
                            }
                        },
                    };
                }}
            />

            {selectedDate && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-600">Select Time Slot</h3>
                    <div className="flex flex-wrap">
                        {timeSlots.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => handleSelectTimeSlot(slot)}
                                className={`mr-2 mb-2 px-4 py-2 ${selectedTimeSlot === slot ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                    } rounded hover:bg-blue-500 hover:text-white transition duration-300`}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                    {selectedTimeSlot && (
                        <button
                            onClick={handleBookAppointment}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                        >
                            Book Appointment
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
export default CalendarView;
