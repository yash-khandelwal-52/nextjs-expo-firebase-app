
import { Button, Container, Typography } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export default function Home() {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome ${result.user.displayName}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Welcome to the Web App</Typography>
      <Button variant="contained" onClick={handleSignIn}>
        Sign in with Google
      </Button>
    </Container>
  );
}
