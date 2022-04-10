// import React from 'react';
// // import { ReactDOM } from 'react';
// // import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';

// const test3 = () => {
//     return (
//         <div>
//             <ButtonToolbar>
//                 <IconButton icon={<AngleRightIcon />} onClick={() => handleOpen('left')}>

//                 </IconButton>
//                 <IconButton icon={<AngleLeftIcon />} onClick={() => handleOpen('right')}>
//                     Right
//                 </IconButton>
//                 <IconButton icon={<AngleDownIcon />} onClick={() => handleOpen('top')}>
//                     Top
//                 </IconButton>
//                 <IconButton icon={<AngleUpIcon />} onClick={() => handleOpen('bottom')}>
//                     Bottom
//                 </IconButton>
//             </ButtonToolbar>

//             <Drawer full placement={placement} open={open} onClose={() => setOpen(false)}>
//                 <Drawer.Header>
//                     <Drawer.Title>Drawer Title</Drawer.Title>
//                     <Drawer.Actions>
//                         <Button onClick={() => setOpen(false)}>Cancel</Button>
//                         <Button onClick={() => setOpen(false)} appearance="primary">
//                             Confirm
//                         </Button>
//                     </Drawer.Actions>
//                 </Drawer.Header>
//                 <Drawer.Body>
//                     <Paragraph rows={8} />
//                 </Drawer.Body>
//             </Drawer>
//         </div>
//     );
// };

// render(<test3 />)
// // export default test3;


// import React, { useRef } from "react";

// export default function App() {
//     const myContainer = useRef();
//     console.log(myContainer.current);

//     return (
//         <>
//             <div className=" mt-20" ref={myContainer}>I can use the DOM with react ref</div>
//         </>
//     );
// }