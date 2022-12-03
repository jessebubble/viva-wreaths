import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/20/solid'

const meetings = [
  {
    id: 1,
    date: 'November 26th, 2022',
    time: '10:00 AM - 4:00 PM',
    location: 'Bandera Market - 12851 Bandera Rd, 78023',
  },
  {
    id: 1,
    date: 'November 27th, 2022',
    time: '11:00 AM - 4:00 PM',
    location: 'Bandera Market - 12851 Bandera Rd, 78023',
  },
  {
    id: 1,
    date: 'December 11th, 2022',
    time: '11:00 AM - 4:00 PM',
    location: 'Bandera Market - 12851 Bandera Rd, 78023',
  },
  
  {
    id: 1,
    date: 'December 17th, 2022',
    time: '12:00 PM - 4:00 PM',
    location: 'SA Local Market - 1921 Fredericksburg Rd, 78201',
  },
]
const days = [
    { date: '2022-11-27' },
    { date: '2022-11-28' },
    { date: '2022-11-29' },
    { date: '2022-11-30' },
    { date: '2022-12-01', isCurrentMonth: true },
    { date: '2022-12-02', isCurrentMonth: true },
    { date: '2022-12-03', isCurrentMonth: true },
    { date: '2022-12-04', isCurrentMonth: true },
    { date: '2022-12-05', isCurrentMonth: true },
    { date: '2022-12-06', isCurrentMonth: true },
    { date: '2022-12-07', isCurrentMonth: true },
    { date: '2022-12-08', isCurrentMonth: true },
    { date: '2022-12-09', isCurrentMonth: true },
    { date: '2022-12-10', isCurrentMonth: true },
    { date: '2022-12-11', isCurrentMonth: true, isSelected: true },
    { date: '2022-12-12', isCurrentMonth: true },
    { date: '2022-12-13', isCurrentMonth: true },
    { date: '2022-12-14', isCurrentMonth: true },
    { date: '2022-12-15', isCurrentMonth: true },
    { date: '2022-12-16', isCurrentMonth: true },
    { date: '2022-12-17', isCurrentMonth: true, isSelected: true },
    { date: '2022-12-18', isCurrentMonth: true },
    { date: '2022-12-19', isCurrentMonth: true },
    { date: '2022-12-20', isCurrentMonth: true },
    { date: '2022-12-21', isCurrentMonth: true },
    { date: '2022-12-22', isCurrentMonth: true },
    { date: '2022-12-23', isCurrentMonth: true },
    { date: '2022-12-24', isCurrentMonth: true },
    { date: '2022-12-25', isCurrentMonth: true },
    { date: '2022-12-26', isCurrentMonth: true },
    { date: '2022-12-27', isCurrentMonth: true },
    { date: '2022-12-28', isCurrentMonth: true },
    { date: '2022-12-29', isCurrentMonth: true },
    { date: '2022-12-30', isCurrentMonth: true },
    { date: '2022-12-31', isCurrentMonth: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EventsHero() {
    return (
        <main className='relative bg-white p-6 md:p-10 lg:p-16 lg:-mt-16 md:mb-16'>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-gray-900">
                Upcoming Market Days
            </h2>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                    <div className="flex items-center text-gray-900">
                        <button
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <div className="flex-auto font-semibold">December</div>
                        <button 
                            type="button" 
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                        <div>S</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>
                        <div>F</div>
                        <div>S</div>
                    </div>
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                        {days.map((day, dayIdx) => (
                            <button
                                key={day.date}
                                type="button"
                                className={classNames(
                                    'py-1.5 hover:bg-gray-100 focus:z-10',
                                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                                    (day.isSelected || day.isToday) && 'font-semibold',
                                    day.isSelected && 'text-white',
                                    !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                                    !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                                    day.isToday && !day.isSelected && 'text-indigo-600',
                                    dayIdx === 0 && 'rounded-tl-lg',
                                    dayIdx === 6 && 'rounded-tr-lg',
                                    dayIdx === days.length - 7 && 'rounded-bl-lg',
                                    dayIdx === days.length - 1 && 'rounded-br-lg'
                                )} >
                                <time
                                    dateTime={day.date}
                                    className={classNames(
                                        'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                                        day.isSelected && day.isToday && 'bg-indigo-600',
                                        day.isSelected && !day.isToday && 'bg-gray-900'
                                    )} >
                                    {day.date.split('-').pop().replace(/^0/, '')}
                                </time>
                            </button>
                        ))}
                    </div>
                    
                </div>
                <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7">
                    {meetings.map((meeting) => (
                        <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static">
                            <div className="flex-auto">
                                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
                                    {meeting.name}
                                </h3>
                                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                    <div className="flex items-start space-x-3">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Date</span>
                                            <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            <time dateTime={meeting.datetime}>
                                                {meeting.date} at {meeting.time}
                                            </time>
                                        </dd>
                                    </div>
                                    <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Location</span>
                                            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>{meeting.location}</dd>
                                    </div>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </main>
    )
}
