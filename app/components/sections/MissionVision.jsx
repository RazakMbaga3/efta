// app/components/sections/MissionVision.jsx
export default function MissionVision() {
    return (
      <div className="grid md:grid-cols-2 gap-6 mb-12 bg-nyati-orange rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-white text-2xl font-bold mb-4">MISSION</h2>
          <p className="text-white">
            To lead Tanzania's transition to sustainable energy through innovative electrical solutions, renewable technologies, and exceptional service that exceeds our customers' expectations
          </p>
        </div>
        <div className="p-6 md:p-8 bg-nyati-orange/90">
          <h2 className="text-white text-2xl font-bold mb-4">VISION</h2>
          <p className="text-white">
            To be East Africa's premier provider of clean energy solutions, driving sustainable development through reliable electrical systems, renewable energy, and energy-efficient technologies
          </p>
        </div>
      </div>
    )
  }