import template from '../opt1/template.js'
export default[
    {
        description:'Container.iterator',
        test(){
            let expected=[3,5,9,4,8,2,1,6,7]
            let c=new template.Queue
            c.in(3,5,9,4,8,2,1,6,7)
            let result=[...template.Container.iterator(c)]
            return expected.length==result.length&&
                expected.every((v,i)=>v==result[i])
        },
    },{
        description:'DirectedGraph',
        test(){
            let expected=[2,1,0]
            let g=new template.DirectedGraph
            for(let n=3;n--;)g.addVertex(n)
            ;[[2,0],[2,1],[1,0]].map(e=>g.addEdge(...e))
            let result=[...g.topologicalSort]
            return expected.length==result.length&&
                expected.every((v,i)=>v==result[i])
        },
    },{
        description:'PriorityQueue',
        test(){
            let expected=[1,2,3,4,5,6,7,8,9]
            let c=new template.PriorityQueue
            c.in(3,5,9,4,8,2,1,6,7)
            let result=[...c]
            return expected.length==result.length&&
                expected.every((v,i)=>v==result[i])
        },
    },{
        description:'PriorityQueue performance in',
        test(){
            let n=1e5
            let c=new template.PriorityQueue
            for(let i=0;i<n;i++)
                c.in(i)
            return 1
        },
    },{
        description:'PriorityQueue performance in+out',
        test(){
            let n=1e5
            let c=new template.PriorityQueue
            for(let i=0;i<n;i++)
                c.in(i)
            for(let i=0;i<n;i++)
                c.out()
            return 1
        },
    },{
        description:'Queue',
        test(){
            let
                expected=[3,5,9,4,8,2,1,6,7],
                c=new template.Queue
            c.in(3,5,9,4,8,2,1,6,7)
            let result=[...c]
            return expected.length==result.length&&
                expected.every((v,i)=>v==result[i])
        },
    },{
        description:'Range',
        test(){
            let
                r=new template.Range(3,9),
                s=new template.Range(-4,7),
                t=r.intersect(s)
            return t.x==3&&t.y==7
        },
    },{
        description:'Stack',
        test(){
            let
                expected=[7,6,1,2,8,4,9,5,3],
                c=new template.Stack
            c.in(3,5,9,4,8,2,1,6,7)
            let result=[...c]
            return expected.length==result.length&&
                expected.every((v,i)=>v==result[i])
        },
    },{
        description:'Vector2',
        test(){
            let v=new template.Vector2(3,4)
            return +v==5
        },
    },{
        description:'array.difference',
        test(){
            let
                a=[3,2,4,8],
                b=template.array.difference([3,5,9,17])
            return a.length==b.length&&a.every((v,i)=>v==b[i])
        },
    },{
        description:'array.prefixSum',
        test(){
            let
                a=[3,5,9,17],
                b=template.array.prefixSum([3,2,4,8])
            return a.length==b.length&&a.every((v,i)=>v==b[i])
        },
    },
]
