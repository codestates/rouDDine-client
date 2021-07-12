const initialData = [
  {
    id: 3,
    name: '데일리루틴1',
    userid: '2',
    finished_time: 0,
    share: true,
    tasks: [
      { id: '1', name: '벤치프레스', set_time: 40, rest_time: 40 },
      { id: '2', name: '스쿼트', set_time: 35, rest_time: 40 },
      { id: '3', name: '데드리프트', set_time: 20, rest_time: 40 },
      { id: '4', name: '달리기', set_time: 20, rest_time: 40 },
      { id: '5', name: '크로스핏', set_time: 10, rest_time: 40 },
      { id: '6', name: '휴식', set_time: 1, rest_time: 40 },
      { id: '7', name: '물마시기', set_time: 2, rest_time: 40 },
      { id: '8', name: '풀업', set_time: 15, rest_time: 40 },
      { id: '9', name: '싯업', set_time: 5, rest_time: 40 },
    ],
    columns: {
      'column-1': {
        id: 'column-1',
        title: '저장 된 운동',
        taskIds: ['1', '3', '5', '9'],
      },
      'column-2': {
        id: 'column-2',
        title: '오늘 할 운동',
        taskIds: ['2', '4', '6', '7', '8'],
      },
    },
    columnOrder: ['column-1', 'column-2'],
  },
  {
    id: 4,
    name: '데일리루틴1',
    userid: '2',
    finished_time: 0,
    share: true,
    tasks: {
      1: { id: '1', name: '벤치프레스', set_time: 40, rest_time: 40 },
      2: { id: '2', name: '스쿼트', set_time: 35, rest_time: 40 },
      3: { id: '3', name: '데드리프트', set_time: 20, rest_time: 40 },
      4: { id: '4', name: '달리기', set_time: 20, rest_time: 40 },
      5: { id: '5', name: '크로스핏', set_time: 10, rest_time: 40 },
      6: { id: '6', name: '휴식', set_time: 1, rest_time: 40 },
      7: { id: '7', name: '물마시기', set_time: 2, rest_time: 40 },
      8: { id: '8', name: '풀업', set_time: 15, rest_time: 40 },
      9: { id: '9', name: '싯업', set_time: 5, rest_time: 40 },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: '저장 된 운동',
        taskIds: ['1', '3', '5', '9'],
      },
      'column-2': {
        id: 'column-2',
        title: '오늘 할 운동',
        taskIds: ['2', '4', '6', '7', '8'],
      },
    },
    columnOrder: ['column-1', 'column-2'],
  },
  {
    id: 5,
    name: '데일리루틴1',
    userid: '2',
    finished_time: 0,
    share: true,
    tasks: {
      1: { id: '1', name: '벤치프레스', set_time: 40, rest_time: 40 },
      2: { id: '2', name: '스쿼트', set_time: 35, rest_time: 40 },
      3: { id: '3', name: '데드리프트', set_time: 20, rest_time: 40 },
      4: { id: '4', name: '달리기', set_time: 20, rest_time: 40 },
      5: { id: '5', name: '크로스핏', set_time: 10, rest_time: 40 },
      6: { id: '6', name: '휴식', set_time: 1, rest_time: 40 },
      7: { id: '7', name: '물마시기', set_time: 2, rest_time: 40 },
      8: { id: '8', name: '풀업', set_time: 15, rest_time: 40 },
      9: { id: '9', name: '싯업', set_time: 5, rest_time: 40 },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: '저장 된 운동',
        taskIds: ['1', '3', '5', '9'],
      },
      'column-2': {
        id: 'column-2',
        title: '오늘 할 운동',
        taskIds: ['2', '4', '6', '7', '8'],
      },
    },
    columnOrder: ['column-1', 'column-2'],
  },
];

export default initialData;
