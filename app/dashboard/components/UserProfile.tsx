type UserProfileProps = {
    userId: string;
  };
  
  const UserProfile = ({ userId }: UserProfileProps) => {
    return <div>User Profile for {userId}</div>;
  };
  
  export default UserProfile;
  