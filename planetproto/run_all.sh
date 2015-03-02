planetproto select '010 Simple objects' ;  planetproto verify 01-simple_objects/01-simple-objects.js
planetproto select '020 Proto' ;  planetproto verify 02-proto/02-proto.js
planetproto select '030 Dynamic lookups' ;  planetproto verify 03-dynamic_lookups/03-dynamic-lookups.js
planetproto select '040 Property assignments' ;  planetproto verify 04-property_assignments/04-property-assignments.js
planetproto select '050 Arrays and Objects' ;  planetproto verify 05-arrays_and_objects/05-arrays-and-objects.js
planetproto select '060 Object Create' ;  planetproto verify 06-object_create/06-object-create.js
planetproto select '070 Dot New' ;  planetproto verify 07-dot_new/07-dot-new.js
planetproto select '080 Constructor functions' ;  planetproto verify 08-constructor_functions/08-constructor-functions.js
planetproto select '090 Implicit this' ;  planetproto verify 09-implicit_this/09-implicit-this.js
planetproto select '100 Function prototype' ;  planetproto verify 10-function_prototype/10-function-prototype.js


# cleanup generated boilerplates
rm *.js
