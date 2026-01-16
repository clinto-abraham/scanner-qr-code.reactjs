import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Layout from '../components/layout/Layout';
import { eventService } from '../services';
import { v4 as uuidv4 } from 'uuid';

export default function BatchQrGenerator() {
  const [eventId, setEventId] = useState('');
  const [status, setStatus] = useState('CONFIRMED');
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchParticipants = async () => {
    setLoading(true);
    try {
      const res = await eventService.getParticipantsForQR({
        eventId,
        status, // CONFIRMED | ALL
      });
      setParticipants(res.data || []);
    } finally {
      setLoading(false);
    }
  };

  const printAll = () => {
    const content = document.getElementById('qr-batch').innerHTML;
    const w = window.open('', '_blank');
    w.document.write(`<html><body>${content}</body></html>`);
    w.document.close();
    w.print();
  };

  return (
    <Layout>
      <h2>Batch QR Generation</h2>

      {/* FILTERS */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          placeholder="Event ID"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="CONFIRMED">Confirmed</option>
          <option value="ALL">All</option>
        </select>

        <button onClick={fetchParticipants}>
          Fetch Participants
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {/* QR GRID */}
      <div
        id="qr-batch"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {participants.map((p) => {
          const qrPayload = {
            participantId: p._id,
            eventId,
            qrId: uuidv4(),
          };

          return (
            <div
              key={p._id}
              style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem' }}
            >
              <QRCodeSVG
                value={JSON.stringify(qrPayload)}
                size={160}
                includeMargin
              />
              <p>{p.name}</p>
            </div>
          );
        })}
      </div>

      {participants.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <button onClick={printAll}>🖨️ Print All</button>
        </div>
      )}
    </Layout>
  );
}
