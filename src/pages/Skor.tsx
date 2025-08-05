import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import './skor.css'

type SkorData = {
  id: number
  nama: string
  nilai: number
}

const Skor = () => {
  const [skorData, setSkorData] = useState<SkorData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkor = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('skor_soal') // nama tabel di Supabase kamu
        .select('id, nama, nilai')
        .order('nilai', { ascending: false })

      if (error) {
        console.error('Gagal mengambil data:', error.message)
      } else {
        setSkorData(data || [])
      }

      setLoading(false)
    }

    fetchSkor()
  }, [])

  return (
    <div className="skor-container">
      <h1>🏆Daftar Skor🏆</h1>
      {loading ? (
        <p>Memuat...</p>
      ) : (
        <div className="skor-table">
          <div className="skor-header">
            <div>No</div>
            <div>Nama</div>
            <div>Skor</div>
          </div>
          {skorData.map((item, index) => (
            <div className="skor-row fade-in" key={item.id}>
              <div>{index + 1}</div>
              <div>{item.nama}</div>
              <div>{item.nilai}</div>
            </div>
          ))}
        </div>
      )}

      <Link
        to="/"
        className="mt-10 inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        ⬅ Kembali ke Beranda
      </Link>
    </div>
  )
}

export default Skor
