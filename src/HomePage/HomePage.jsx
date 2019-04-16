import React from 'react';
import styledHomePage from'./styledHomePage';

function HomePage(props) {

  return (
    <div className={props.className}>
      Hello
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere sollicitudin lacus, in porttitor arcu scelerisque a. Suspendisse ut lacus consectetur, pulvinar risus a, pretium ante. Nulla facilisi. Integer varius dignissim erat at fermentum. Maecenas quis pellentesque ligula. Cras consectetur viverra nunc. Aliquam non mauris volutpat, molestie purus eget, cursus libero. Suspendisse aliquet iaculis nunc non condimentum. Quisque pretium libero lacinia leo malesuada, vel tempor ligula porta. Ut euismod sem mauris, nec sodales lacus ultrices ac. Mauris dapibus convallis neque, et faucibus augue aliquam ut. Maecenas id ligula lectus. Aliquam odio magna, tincidunt in elementum eget, suscipit non velit.</div>
      <div>Nulla facilisi. Cras faucibus euismod justo, ut vehicula eros commodo sed. Nam condimentum sem ac velit pretium, et hendrerit nulla tincidunt. Maecenas sem purus, lobortis maximus consectetur vel, elementum eget ante. Nulla rhoncus sapien condimentum consequat ornare. Ut et dui nulla. Mauris lacinia volutpat ex, ut iaculis dolor tristique sed. Cras dapibus vehicula sapien, laoreet semper augue pharetra et. Donec venenatis dignissim justo non ultrices. Ut ullamcorper congue elit, at porttitor purus luctus non. Integer vehicula odio et nunc dictum, vel interdum justo condimentum. Donec consectetur neque sit amet erat porta semper. Vestibulum quis sollicitudin erat. Fusce dapibus, nisi ut placerat gravida, nunc nibh consectetur lectus, non porttitor purus erat nec arcu.</div>
    </div>
  );
}

export default styledHomePage(HomePage);
