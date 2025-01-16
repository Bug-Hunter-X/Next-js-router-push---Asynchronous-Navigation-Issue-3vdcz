```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    const routeChangeComplete = (url) => {
      console.log('Navigated to', url);
    };
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.push('/my-page');
  };

  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}

export default MyComponent;
```