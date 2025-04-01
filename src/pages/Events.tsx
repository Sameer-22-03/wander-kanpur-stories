
import React, { useState, useEffect, useMemo } from "react";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import EventCard from "../components/EventCard";
import { events, eventCategories, Event } from "../data/events";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const EventCalendarView = ({ events, selectedMonth, onMonthChange }: any) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const currentDate = new Date();
  currentDate.setMonth(selectedMonth);
  
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Empty days before the 1st of the month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  // Group events by day of month
  const eventsByDay: {[key: number]: Event[]} = {};
  events.forEach((event: Event) => {
    const eventDate = new Date(event.date);
    if (eventDate.getMonth() === selectedMonth) {
      const dayOfMonth = eventDate.getDate();
      if (!eventsByDay[dayOfMonth]) {
        eventsByDay[dayOfMonth] = [];
      }
      eventsByDay[dayOfMonth].push(event);
    }
  });
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => onMonthChange(selectedMonth - 1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="font-serif text-xl font-bold">
          {monthNames[selectedMonth]} {currentDate.getFullYear()}
        </h3>
        <button 
          onClick={() => onMonthChange(selectedMonth + 1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="text-center font-medium text-dark-gray py-2">
            {day}
          </div>
        ))}
        
        {days.map((day, index) => (
          <div 
            key={index}
            className={`aspect-square p-1 border ${
              day ? "cursor-pointer hover:bg-gray-50" : ""
            } ${
              eventsByDay[day as number] ? "border-gold" : "border-gray-100"
            }`}
          >
            {day && (
              <div className="h-full">
                <div className="text-right text-sm mb-1">
                  {day}
                </div>
                {eventsByDay[day] && (
                  <div className="flex flex-wrap gap-1">
                    {eventsByDay[day].slice(0, 2).map((event, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-gold"
                        title={event.title}
                      ></div>
                    ))}
                    {eventsByDay[day].length > 2 && (
                      <div className="text-xs text-gold">+{eventsByDay[day].length - 2}</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  
  // Filter events based on category and search query
  useEffect(() => {
    let result = [...events];
    
    if (selectedCategory !== "All") {
      result = result.filter((event) => event.category === selectedCategory);
    }
    
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(lowerCaseQuery) ||
          event.description.toLowerCase().includes(lowerCaseQuery) ||
          event.location.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    setFilteredEvents(result);
  }, [selectedCategory, searchQuery]);
  
  // Events for the selected month
  const monthEvents = useMemo(() => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === selectedMonth;
    });
  }, [selectedMonth]);
  
  // Handle month change with bounds
  const handleMonthChange = (newMonth: number) => {
    if (newMonth < 0) {
      setSelectedMonth(11);
    } else if (newMonth > 11) {
      setSelectedMonth(0);
    } else {
      setSelectedMonth(newMonth);
    }
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Events & Festivals"
        subtitle="Discover the vibrant cultural events, festivals, and activities in Kanpur"
        backgroundImage="https://images.unsplash.com/photo-1604577464198-2239d8b8d568?q=80&w=1000"
        height="h-[60vh]"
      />
      
      <section className="page-container -mt-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-lg shadow-md p-4">
          <div className="mb-4 md:mb-0">
            <FilterBar 
              categories={eventCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
              showSearch={viewMode === "list"}
            />
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-md ${
                viewMode === "list"
                  ? "bg-deep-blue text-white"
                  : "bg-gray-100 text-dark-gray hover:bg-gray-200"
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-4 py-2 rounded-md flex items-center ${
                viewMode === "calendar"
                  ? "bg-deep-blue text-white"
                  : "bg-gray-100 text-dark-gray hover:bg-gray-200"
              }`}
            >
              <Calendar size={16} className="mr-2" />
              Calendar View
            </button>
          </div>
        </div>
        
        <div className="mt-10">
          {viewMode === "list" ? (
            <>
              <h2 className="section-title">
                {filteredEvents.length > 0
                  ? `${selectedCategory === "All" ? "All" : selectedCategory} Events`
                  : "No events found"}
              </h2>
              
              {filteredEvents.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-dark-gray text-lg">
                    No events found matching your filters. Please try a different search or category.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="mt-8">
              <h2 className="section-title mb-6">Event Calendar</h2>
              <EventCalendarView 
                events={events} 
                selectedMonth={selectedMonth}
                onMonthChange={handleMonthChange}
              />
              
              {/* Show events for selected month */}
              <div className="mt-10">
                <h3 className="text-xl font-serif font-bold text-deep-blue mb-4">
                  Events in {new Date(2023, selectedMonth).toLocaleString('default', { month: 'long' })}
                </h3>
                
                {monthEvents.length === 0 ? (
                  <p className="text-dark-gray">No events scheduled for this month.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {monthEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Info Section */}
      <section className="bg-light-cream py-16 mt-16">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-deep-blue mb-6">
              About Kanpur Events
            </h2>
            <p className="text-dark-gray mb-4">
              Kanpur hosts a variety of cultural events, festivals, and activities throughout
              the year that showcase the rich heritage and traditions of the region. From
              religious festivals like Ganesh Chaturthi and Durga Puja to cultural events
              like music concerts and art exhibitions, there's always something happening in
              the city.
            </p>
            <p className="text-dark-gray mb-4">
              The city's vibrant event calendar includes food festivals that celebrate the
              local cuisine, heritage walks that explore the historical landmarks, and seasonal
              celebrations that bring together locals and visitors alike. Many events take place
              at iconic venues like Phool Bagh, JK Temple, and Bithoor Ghats.
            </p>
            <p className="text-dark-gray">
              Whether you're interested in cultural performances, religious ceremonies, or
              contemporary entertainment, Kanpur's events offer a glimpse into the city's
              soul and spirit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
