## adrian mui, peoplegrove, top sekrit stuff

## Purpose
i wanna know what's for lunch. slack integration.

node_/express_/passport/mongo_/slack/webpack/react?

## Getting Started

```
  npm install
  npm build
  npm start
```

## Schema: user, (food)place, (food)type, opinion, history

```
  user: done
    _id:
    pg_email: string // must have peoplGroveEmail
    google_auth_token: string // passport will handle this

  place: done
    _id:
    name:
    types: [collection]

    > has_many place_type
    > has_many history

  category: done
    _id:
    description: string

    > has_many place_type

  place_type: (nonrelational db chosen)
    _id:
    type_id: 
    place_id: 

    > collection

  opinion:  done
    _id:
    rating: int
    comment: string
    user_id:
    place_id:

    > belongs_to user

  history:
    _id:
    date:
    rating: int
    comments: [collection]
    place_id:

    > belongs_to place
```
  

