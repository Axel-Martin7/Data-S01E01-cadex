select
    "name"."content" AS "name",
    "adjective"."content" AS "adjective",
    "verb"."content" AS "verb",
    "complement"."content" AS "complement",
    ARRAY_AGG("correction"."content") AS "correction"
from "name"
    join "adjective" ON "adjective"."id" = 1
    join "verb" ON "verb"."id" = 1
    join "complement" ON "complement"."id" = 1
    join "correction" ON "name_id" = 2 AND "adjective_id" = 1 AND "verb_id" = 1 AND "complement_id" = 1
where "name"."id" = 2
group by
    "name"."id",
    "adjective"."id",
    "verb"."id",
    "complement"."id";