# Folder Structure Planning

1. React sends request
   └─ Authorization: Bearer JWT

2. Gateway receives request
   ├─ CORS check
   ├─ JWT validation
   ├─ RBAC (route → roles)
   ├─ Rate limiting (Redis)
   ├─ Spike detection
   ├─ IP rules
   ├─ Device fingerprint
   ├─ Replay check
   ├─ Threat scoring

3. Gateway builds context
   ├─ requestId
   ├─ timestamp
   ├─ userContext
   ├─ fingerprint

4. Gateway signs request
   ├─ HMAC(body + timestamp)
   ├─ Adds internal secret

5. Custom proxy forwards request

6. Mongo-service receives
   ├─ Internal secret validation
   ├─ Gateway context decoding
   ├─ Replay protection
   ├─ HMAC verification
   ├─ Business logic

7. Response flows back
   ├─ Normalized response
   └─ requestId preserved

✅ Zero-trust API gateway
✅ Envelope-based contract
✅ Stateless auth
✅ Replay-safe system
✅ Gateway-owned metadata
✅ Internal service isolation
✅ Production-ready frontend integration

src/
├── app/
│   └── AppProviders.jsx
├── configs/
│   ├── reactQuery.config.js
│   └── env.config.js
├── lib/
│   └── apiClient.js
├── services/
│   └── participant.service.js
├── hooks/
│   ├── mutations/
│   │   └── useScanParticipant.js
│   └── queries/
│       └── useParticipantDetails.js
│       ├── useParticipant.js
│       ├── useParticipantsList.js
│       ├── useEventDetails.js
│       ├── useFoodStatus.js
│       └── useStayDetails.js
├── components/
│   ├── qr/
│   │   └── QRScanner.jsx
│   ├── participant/
│   │   ├── ParticipantCard.jsx
│   │   ├── FoodTokenBadge.jsx
│   │   └── StayInfo.jsx
├── pages/
│   └── ScanPage.jsx
├── utils/
│   ├── useInvalidateParticipant.js
│   └── useOptimisticFoodUpdate.js
└── main.jsx



src/hooks/

│
├── mutations/
│   ├── useScanParticipant.js
│   ├── useApplyFoodToken.js
│   ├── useUndoFoodToken.js
│   ├── useUpdateStay.js
│   └── useCreateParticipant.js
│
├── utils/
│   ├── useInvalidateParticipant.js
│   └── useOptimisticFoodUpdate.js
│
└── index.js
