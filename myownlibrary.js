function bounceOff(gameobject1,gameobject2)
{
  if(gameobject1.x - gameobject2.x < gameobject2.width/2 + gameobject1.width/2 && 
    gameobject2.x - gameobject1.x < gameobject2.width/2 + gameobject1.width/2 )
    {
      gameobject1.velocityX = gameobject1.velocityX *(-1);
      gameobject2.velocityX = gameobject2.velocityX *(-1);
    }
    if(gameobject1.y - gameobject2.y < gameobject2.height/2 + gameobject1.height/2 && 
    gameobject2.y - movingRect.y < gameobject2.height/2 + gameobject1.height/2)
{
  gameobject1.velocityY = gameobject1.velocityY * (-1);
  gameobject2.velocityY = gameobject2.velocityY  *(-1);
}
}

function isTouching(gameObject1, gameObject2)
{
  if(gameObject1.x - gameObject2.x < gameObject2.width/2 + gameObject1.width/2 &&
    gameObject2.x - gameObject1.x < gameObject2.width/2 + gameObject1.width/2 &&
    gameObject1.y - gameObject2.y < gameObject2.height/2 + gameObject1.height/2&&
    gameObject2.y - gameObject1.y < gameObject2.height/2 + gameObject1.height/2)
  {
    return true;
  }
  else
  {
    return false;

  }
}