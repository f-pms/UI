const blueprint = {
  blueprintId: 'bp-101',
  name: 'Factory Floor Sensors',
  description: 'Layout for monitoring factory floor sensors',
  sensorConfigurations: [
    {
      groupId: 'Lv30Table',
      figures: [
        {
          id: 'figure1',
          address: 'DB9.D2060.0',
          displayCoordinate: {
            x: 539.31,
            y: 915.87,
          },
        },
        {
          id: 'figure2',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 591.15,
            y: 915.87,
          },
        },
        {
          id: 'figure3',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 642.99,
            y: 915.87,
          },
        },
        {
          id: 'figure4',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 539.31,
            y: 941.79,
          },
        },
        {
          id: 'figure5',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 591.15,
            y: 941.79,
          },
        },
        {
          id: 'figure6',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 642.99,
            y: 941.79,
          },
        },
        {
          id: 'figure7',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 592.94,
            y: 967.8,
          },
        },
        {
          id: 'figure8',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 592.94,
            y: 993.72,
          },
        },
        {
          id: 'figure9',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 592.94,
            y: 1019.64,
          },
        },
        {
          id: 'figure10',
          address: 'DB9.D2064.0',
          displayCoordinate: {
            x: 592.94,
            y: 1045.56,
          },
        },
      ],
    },
    {
      groupId: 'Lv11Table',
      figures: [
        // {
        //   id: 'figure1',
        //   address: 'DB9.D2060.0',
        //   displayCoordinate: {
        //     x: 975.45,
        //     y: 896.03,
        //   },
        // },
        // {
        //   id: 'figure2',
        //   address: 'DB9.D2064.0',
        //   displayCoordinate: {
        //     x: 1027.29,
        //     y: 896.03,
        //   },
        // },
      ],
    },
  ],
};

export default blueprint;
