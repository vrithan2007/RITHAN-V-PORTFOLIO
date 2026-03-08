import { motion } from 'motion/react';

const metrics = [
  {
    id: 1,
    title: 'Signal Frequency',
    value: '2.4 GHz',
    change: '+0.2%',
    isPositive: true,
    data: [20, 30, 25, 40, 35, 50, 45, 60, 55, 70],
  },
  {
    id: 2,
    title: 'Power Efficiency',
    value: '92%',
    change: '+1.5%',
    isPositive: true,
    data: [40, 35, 45, 40, 55, 50, 65, 60, 80, 75],
  },
  {
    id: 3,
    title: 'Sensor Accuracy',
    value: '±0.5%',
    change: '-0.1%',
    isPositive: false,
    data: [70, 65, 75, 60, 55, 65, 50, 45, 55, 40],
  },
  {
    id: 4,
    title: 'System Latency',
    value: '12 ms',
    change: '-2.4%',
    isPositive: false,
    data: [60, 55, 65, 50, 45, 55, 40, 35, 45, 30],
  },
];

const MiniChart = ({ data, isPositive }: { data: number[]; isPositive: boolean }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const color = isPositive ? '#00FF00' : '#FF0000';

  return (
    <div className="w-24 h-12 relative">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id={`grad-${isPositive}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon 
          points={`0,100 ${points} 100,100`} 
          fill={`url(#grad-${isPositive})`} 
        />
        <polyline 
          points={points} 
          fill="none" 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
    </div>
  );
};

export default function TradingDashboard() {
  return (
    <section className="w-full bg-[#0B0E14] border-y border-white/5 py-6 overflow-hidden relative z-20">
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-full">
        <motion.div 
          className="flex gap-6 px-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ width: "max-content" }}
        >
          {/* Render the metrics twice to create a seamless loop */}
          {[...metrics, ...metrics, ...metrics, ...metrics].map((metric, idx) => (
            <div 
              key={`${metric.id}-${idx}`}
              className="flex-shrink-0 w-64 bg-[#131722]/80 backdrop-blur-md border border-white/5 rounded-xl p-4 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${metric.isPositive ? 'bg-[#00FF00]' : 'bg-[#FF0000]'}`} />
              
              <div className="flex justify-between items-start mb-2 relative z-10">
                <div>
                  <h3 className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">{metric.title}</h3>
                  <div className="text-xl font-bold text-white font-mono">{metric.value}</div>
                </div>
                <div className={`text-xs font-mono px-2 py-1 rounded bg-black/30 ${metric.isPositive ? 'text-[#00FF00]' : 'text-[#FF0000]'}`}>
                  {metric.change}
                </div>
              </div>
              
              <div className="flex justify-between items-end mt-4 relative z-10">
                <div className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full animate-pulse ${metric.isPositive ? 'bg-[#00FF00]' : 'bg-[#FF0000]'}`} />
                  <span className="text-[10px] text-gray-500 font-mono uppercase">Live</span>
                </div>
                <MiniChart data={metric.data} isPositive={metric.isPositive} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
