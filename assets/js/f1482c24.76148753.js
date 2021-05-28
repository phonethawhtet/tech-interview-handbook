(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9030],{2122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},913:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"graph",title:"Graph"},l={unversionedId:"algorithms/graph",id:"algorithms/graph",isDocsHomePage:!1,title:"Graph",description:"Study links",source:"@site/../contents/algorithms/graph.md",sourceDirName:"algorithms",slug:"/algorithms/graph",permalink:"/tech-interview-handbook/algorithms/graph",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/graph.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"graph",title:"Graph"},sidebar:"docs",previous:{title:"Geometry",permalink:"/tech-interview-handbook/algorithms/geometry"},next:{title:"Hash Table",permalink:"/tech-interview-handbook/algorithms/hash-table"}},s=[{value:"Study links",id:"study-links",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Graph search algorithms:",id:"graph-search-algorithms",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"study-links"},"Study links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/basecs/from-theory-to-practice-representing-graphs-cfd782c5be38"},"From Theory To Practice: Representing Graphs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/basecs/deep-dive-through-a-graph-dfs-traversal-8177df5d0f13"},"Deep Dive Through A Graph: DFS Traversal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/basecs/going-broad-in-a-graph-bfs-traversal-959bd1a09255"},"Going Broad In A Graph: BFS Traversal"))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Be familiar with the various graph representations, graph search algorithms and their time and space complexities."),(0,i.kt)("p",null,"You can be given a list of edges and tasked to build your own graph from the edges to perform a traversal on. The common graph representations are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adjacency matrix."),(0,i.kt)("li",{parentName:"ul"},"Adjacency list."),(0,i.kt)("li",{parentName:"ul"},"Hashmap of hashmaps.")),(0,i.kt)("p",null,"A tree-like diagram could very well be a graph that allows for cycles and a naive recursive solution would not work. In that case you will have to handle cycles and keep a set of visited nodes when traversing."),(0,i.kt)("h2",{id:"graph-search-algorithms"},"Graph search algorithms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Common")," - Breadth-first Search, Depth-first Search"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Uncommon")," - Topological Sort, Dijkstra's algorithm"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rare")," - Bellman-Ford algorithm, Floyd-Warshall algorithm, Prim's algorithm, Kruskal's algorithm")),(0,i.kt)("p",null,"In coding interviews, graphs are commonly represented as 2-D matrices where cells are the nodes and each cell can traverse to its adjacent cells (up/down/left/right). Hence it is important that you be familiar with traversing a 2-D matrix. When traversing the matrix, always ensure that your current position is within the boundary of the matrix and has not been visited before."),(0,i.kt)("p",null,"A simple template for doing depth-first searches on a matrix goes like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def dfs(matrix):\n  # Check for an empty graph.\n  if not matrix:\n    return []\n\n  rows, cols = len(matrix), len(matrix[0])\n  visited = set()\n  directions = ((0, 1), (0, -1), (1, 0), (-1, 0))\n\n  def traverse(i, j):\n    if (i, j) in visited:\n      return\n\n    visited.add((i, j))\n    # Traverse neighbors.\n    for direction in directions:\n      next_i, next_j = i + direction[0], j + direction[1]\n      if 0 <= next_i < rows and 0 <= next_j < cols:\n        # Add in your question-specific checks.\n        traverse(next_i, next_j)\n\n  for i in range(rows):\n    for j in range(cols):\n      traverse(i, j)\n")),(0,i.kt)("p",null,"A similar template for doing breadth-first searches on the matrix goes like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from collections import deque\n\ndef bfs(matrix):\n  # Check for an empty graph.\n  if not matrix:\n    return []\n\n  rows, cols = len(matrix), len(matrix[0])\n  visited = set()\n  directions = ((0, 1), (0, -1), (1, 0), (-1, 0))\n\n  def traverse(i, j):\n    queue = deque([(i, j)])\n    while queue:\n      curr_i, curr_j = queue.popleft()\n      if (curr_i, curr_j) not in visited:\n        visited.add((curr_i, curr_j))\n        # Traverse neighbors.\n        for direction in directions:\n          next_i, next_j = curr_i + direction[0], curr_j + direction[1]\n          if 0 <= next_i < rows and 0 <= next_j < cols:\n            # Add in your question-specific checks.\n            queue.append((next_i, next_j))\n\n  for i in range(rows):\n    for j in range(cols):\n      traverse(i, j)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: While DFS is implemented using recursion in this sample, it could also be implemented iteratively similar to BFS. The key difference between the algorithms lies in the underlying data structure (BFS uses a queue while DFS uses a stack). The ",(0,i.kt)("inlineCode",{parentName:"p"},"deque")," class in Python can function as both a stack and a queue")),(0,i.kt)("p",null,"For additional tips on BFS and DFS, you can refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/pacific-atlantic-water-flow/discuss/90774/Python-solution-with-detailed-explanation"},"LeetCode post")),(0,i.kt)("h2",{id:"corner-cases"},"Corner cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Empty graph"),(0,i.kt)("li",{parentName:"ul"},"Graph with one or two nodes"),(0,i.kt)("li",{parentName:"ul"},"Disjoint graphs"),(0,i.kt)("li",{parentName:"ul"},"Graph with cycles")),(0,i.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/clone-graph/"},"Clone Graph")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/course-schedule/"},"Course Schedule")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/pacific-atlantic-water-flow/"},"Pacific Atlantic Water Flow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/number-of-islands/"},"Number of Islands")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-consecutive-sequence/"},"Longest Consecutive Sequence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/alien-dictionary/"},"Alien Dictionary (LeetCode Premium)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/graph-valid-tree/"},"Graph Valid Tree (LeetCode Premium)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"},"Number of Connected Components in an Undirected Graph (LeetCode Premium)"))))}p.isMDXComponent=!0}}]);