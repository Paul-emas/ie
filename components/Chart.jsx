import { useEffect, useState } from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import SelectInput from '../components/forms/SelectInput';

import { chart_one, chart_two, chart_three } from '../utils/data';

const Chart = ({ title, selectedMonth, setSelectedMonth }) => {
  const [selectedMonthStats, setSelectedMonthStats] = useState(chart_one);
  const [activeRange, setActiveRange] = useState(0);

  const onSubmit = (data) => {
    setSelectedMonthStats(chart_three);
  };

  const ranges = [
    {
      name: 'Hourly',
      data: chart_one,
    },
    {
      name: 'Daily',
      data: chart_two,
    },
    {
      name: 'Weekly',
      data: chart_three,
    },
    {
      name: 'Monthly',
      data: chart_one,
    },
  ];

  return (
    <>
      <div className="mb-10 mt-0 h-56 w-full rounded-xl bg-white py-5 sm:mb-0 sm:h-96 lg:mt-10">
        <div className="mb-2 flex w-full justify-between sm:px-5">
          <h2 className="mt-2 text-base font-bold text-font-darker sm:mt-0 sm:text-xl ">{title}</h2>
          <div className="w-36 sm:w-40">
            <SelectInput
              selectedOption={selectedMonth}
              setSelectedOption={setSelectedMonth}
              options={[{ name: '1 month' }, { name: '2 month' }]}
            />
          </div>
        </div>
        <div className="hidden h-full w-full sm:block">
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart
              data={selectedMonthStats}
              fontSize={12}
              fontWeight={'semibold'}
              margin={{
                top: 10,
                right: 10,
                left: 40,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="50%" stopColor="#347F95" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#347F95" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: '#989898' }} />
              <YAxis tick={{ fill: '#989898' }} orientation="right" />
              <CartesianGrid x="2" vertical={false} strokeDasharray="4" />
              <Tooltip
                wrapperStyle={{
                  color: 'red',
                  backgroundColor: '#000 !important',
                }}
                labelStyle={{ color: 'green' }}
                itemStyle={{ color: '#000' }}
                formatter={(value) => {
                  return [`${value}`, `Kwh`];
                }}
                labelFormatter={(value) => {
                  return 'Unit Purchased', value;
                }}
              />
              <Area
                dataKey="pv"
                stroke="#347F95"
                fillOpacity={0.5}
                strokeWidth={2}
                dot={{
                  r: 6,
                  stroke: '#347F95',
                  strokeWidth: 1,
                  fill: '#fff',
                  fillOpacity: 2,
                }}
                activeDot={{
                  r: 5,
                  stroke: '#347F95',
                  strokeWidth: 4,
                  fill: '#fff',
                }}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="block h-full w-full sm:hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={selectedMonthStats}
              fontSize={12}
              fontWeight={'semibold'}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="50%" stopColor="#347F95" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#347F95" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: '#989898' }} axisLine={false} tickLine={false} tickMargin={0} />
              <Tooltip
                wrapperStyle={{
                  color: 'red',
                  backgroundColor: '#000 !important',
                }}
                labelStyle={{ color: 'green' }}
                itemStyle={{ color: '#000' }}
                formatter={(value) => {
                  return [`${value}`, `Kwh`];
                }}
                labelFormatter={(value) => {
                  return 'Unit Purchased', value;
                }}
              />
              <Area
                dataKey="pv"
                stroke="#347F95"
                fillOpacity={0.5}
                strokeWidth={2}
                dot={{
                  r: 4,
                  stroke: '#347F95',
                  strokeWidth: 1,
                  fill: '#347F95',
                  fillOpacity: 2,
                }}
                activeDot={{
                  r: 5,
                  stroke: '#347F95',
                  strokeWidth: 4,
                  fill: '#fff',
                }}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex space-x-4 py-6 sm:hidden">
        {ranges.map(({ name, data }, index) => (
          <div
            onClick={() => {
              setActiveRange(index);
              setSelectedMonthStats(data);
            }}
            key={`${name}${index}`}
            className={`${
              activeRange === index ? 'border-primary-base text-primary-base' : 'border-gray-200'
            } rounded-lg border py-2 px-4 text-xs font-semibold`}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Chart;
