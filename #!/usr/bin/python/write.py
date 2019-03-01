syntax: fileObject.write(string);

#!/usr/bin/python

# Open a file
fo = open("foo.txt", "wb")
fo.write( "Python is a great language.\nYeah Pret its great!!\n");

# Close opend file
fo.close()
