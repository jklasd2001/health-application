export default [
  // routineId가 1이니까 '가슴일반' 루틴에 대한 종목들이고 순서대로 조회해온것을 볼 수 있다.
  {
    id: '1',
    movementId: '1',
    priority: '1',
    routineId: '1',
  },
  {
    id: '2',
    movementId: '2',
    priority: '2',
    routineId: '1',
  },
  {
    id: '3',
    movementId: '3',
    priority: '3',
    routineId: '1',
  },
  // 5는 '등'루틴. 그리고 같은 종목(4는 데드리프트)을 연속 3세트할거임.
  {
    id: '4',
    movementId: '4',
    priority: '1',
    routineId: '5',
  },
  {
    id: '5',
    movementId: '4',
    priority: '2',
    routineId: '5',
  },
  {
    id: '6',
    movementId: '4',
    priority: '3',
    routineId: '5',
  },
  // 6는 '등 데드교차'루틴. 그리고 데드 사이사이에 랫풀다운은 껴서 할거임.
  {
    id: '7',
    movementId: '4',
    priority: '1',
    routineId: '6',
  },
  {
    id: '8',
    movementId: '6',
    priority: '2',
    routineId: '6',
  },
  {
    id: '9',
    movementId: '4',
    priority: '3',
    routineId: '6',
  },
  {
    id: '10',
    movementId: '6',
    priority: '4',
    routineId: '6',
  },
  {
    id: '11',
    movementId: '4',
    priority: '5',
    routineId: '6',
  },
]
