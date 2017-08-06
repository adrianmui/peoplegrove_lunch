## adrian mui, peoplegrove, top sekrit stuff

## Purpose:

i wanna know what's for lunch. slack integration.

node_/express_/passport/mongo_/slack/webpack/react?

## Getting Started:

```
  npm install // build
  
  npm test // seed database

  npm start // start server with nodemon
```

## API:

```
  user
    GET / -> current user
```

## Schema: user, (food)place, (food)type, opinion, history

```
  user: done
    _id:
    pg_email: string // must have peoplGroveEmail
    google_auth_token: string // passport will handle this

    has_many opinions

  place: done
    _id:
    name:
    types: [collection]

    > has_many place_type
    > has_many history

  category: done
    _id:
    description: string

  opinion:  done
    _id:
    rating: int
    comment: string
    user_id:
    place_id:

    > belongs_to user


  history: done
    _id:
    date:
    rating: int
    place_id:

    > belongs_to place
```
  

