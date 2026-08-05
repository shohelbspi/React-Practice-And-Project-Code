import React, { useState } from 'react';

function DependSelect() {
  const data = {
    Bangladesh: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"],
    India: ["Delhi", "Mumbai", "Kolkata", "Bengaluru"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Germany: ["Berlin", "Munich", "Hamburg"],
    UK: ["London", "Manchester", "Birmingham"]
  };

  const countries = Object.keys(data);

  const [countriesData, setCountries] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Location Selection
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Country
            </label>
            <select
              className="w-full bg-gray-50 border border-amber-400 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 block p-3 transition duration-200 outline-none cursor-pointer"
              value={countriesData}
              onChange={function (e) {
                setCountries(e.target.value);
                setCity('');
              }}
            >
              <option value="">-- Choose Country --</option>
              {countries.map(function (item) {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          {countriesData && (
            <div className="animate-fade-in">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select City
              </label>
              <select
                className="w-full bg-gray-50 border border-amber-400 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 block p-3 transition duration-200 outline-none cursor-pointer"
                value={city}
                onChange={function (e) {
                  setCity(e.target.value);
                }}
              >
                <option value="">-- Choose City --</option>
                {data[countriesData].map(function (item) {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          {countriesData && city && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-center">
              <p className="text-sm text-amber-900 font-medium">
                Selected: <span className="font-bold">{city}</span>, <span className="font-bold">{countriesData}</span>
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default DependSelect;