export class HierarchyData {
  data = [
    {
      nodeId: '1584420547524',
      nodeName: 'Green Koncepts Pte Ltd',
      children: [
        {
          nodeId: '1584420558984',
          nodeName: 'Level 3',
          children: [
            {
              nodeId: '1584420568914',
              nodeName: '#03-15',
              children: [
                {
                  nodeId: '1584420577974',
                  nodeName: 'Energy',
                  children: [
                    {
                      nodeId: '1584420577974',
                      nodeName: 'Energy',
                      children: [],
                    },
                  ],
                },
                {
                  nodeId: '1584420590985',
                  nodeName: 'Temperature & Humidity',
                  children: [
                    {
                      nodeId: '1584420577974',
                      nodeName: 'Energy',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}

export type HierarchyDataInterface = {
  nodeId: String;
  nodeName: String;
  children: Array<HierarchyDataInterface>;
};
